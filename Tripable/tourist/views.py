from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth import authenticate, login ,logout
from rest_framework import permissions
from django.contrib import messages
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import *

# from api.models import login


# Create your views here.

@csrf_exempt

def login_page(request):

    if(request.method == 'POST'):
        username = request.POST.get('username')
        password = request.POST.get('password')

        if not User.objects.filter(username = username).exists():
            # messages.error(request , 'Invalid Username')
            print('Invalid Username')
            return redirect('/login')
        
        user = authenticate(username = username, password= password)

        if(user is None):
            # messages.error(request, 'Invalid Password')
            print('Invalid Password')
            return redirect('/login')
        else:
            login(request,user)
            return redirect('/tripable')

    return render(request, 'login1.html')

def register_page(request):

    if(request.method == 'POST'):
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        cpassword = request.POST.get('cpassword')

        #if username already exists
        user = User.objects.filter(username = username)
        if(user.exists()):
            messages.info(request, 'Username already taken')
            return redirect('/register')
        
        if(password != cpassword):
            messages.info(request, 'Password does not match')
            print('Password does not match')
            return redirect('/register')

        #else create a new user
        user = User.objects.create(
            first_name = first_name,
            last_name = last_name,
            username = username,
            email = email
        )

        user.set_password(password)
        user.save()
        #messages.info(request, 'Account created Successfully')
        return redirect('/register')

    return render(request, 'register.html')



###API Views

class CheckAuthenticatedView(APIView):
    def get(self, request, format=None):
        user = self.request.user

        try:
            isAuthenticated = user.is_authenticated

            if isAuthenticated:
                return Response({ 'isAuthenticated': 'success' })
            else:
                return Response({ 'isAuthenticated': 'error' })
        except:
            return Response({ 'error': 'Something went wrong when checking authentication status' })


#sign up for user
@method_decorator(csrf_protect, name='dispatch')
class customer_view(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = add_user_serializer

    def get(self, request):
        output = [{
            'username' : output.username, 
            'first_name' : output.first_name,
            'last_name' : output.last_name ,
            'email' : output.email
        }
        for output in User.objects.all()]
        return Response(output)
    
    def post(self, request):
        serializer = add_user_serializer(data = request.data)
        if serializer.is_valid(raise_exception=True):

            if(request.method == 'POST'):
                first_name = request.POST.get('first_name')
                last_name = request.POST.get('last_name')
                username = request.POST.get('username')
                email = request.POST.get('email')
                password = request.POST.get('password')
                cpassword = request.POST.get('cpassword')

                print('Username : ', username)
                print('Firstname : ', first_name)

                try:
                    #if username already exists
                    
                    user = User.objects.filter(username = username)
                    if(user.exists()):
                        messages.info(request, 'Username already taken')
                        # return render(request,'home-view.html',{})
                        return Response(data = {'error':'Username already taken'})
                    
                    if(password != cpassword):
                        messages.info(request, 'Password does not match')
                        print('Password does not match')
                        return Response(data = {'error':'Password does not match'})
                        # return render(request,'home-view.html',{})

                    #else create a new user
                    user = User.objects.create(
                        first_name = first_name,
                        last_name = last_name,
                        username = username,
                        email = email,
                    )

                    user.set_password(password)
                    user.save()

                    #messages.info(request, 'Account created Successfully')
                    # return render(request, 'home-view.html', {})
                    return Response({ 'success': 'User created successfully' })
            
                except:
                    return Response({ 'error': 'Something went wrong when registering account' })

   
            serializer.save()
            return Response(serializer.data)
        

@method_decorator(csrf_protect, name='dispatch')
class customer_login_view(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = login_serializer

    def post(self, request):
        serializer = login_serializer(data = request.data)
        if serializer.is_valid(raise_exception=True):

            if(request.method == 'POST'):
                username = request.POST.get('username')
                password = request.POST.get('password')

                try:
                    if not User.objects.filter(username = username).exists():
                        messages.error(request , 'Invalid Username')
                        print('Invalid Username')
                        return Response( data = {'error':'Invalid Username'})
                
                    user = authenticate(username = username, password= password)

                    if(user is None):
                        messages.error(request, 'Invalid Password')
                        print('Invalid Password')
                        return Response( data = {'error':'Invalid Password'})
                    else:
                        login(request,user)
                        return Response('logged in successfully')
                    
                except:
                    return Response({ 'error': 'Something went wrong when logging in' })
                

class LogoutView(APIView):
    def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({ 'success': 'Loggout Out' })
        except:
            return Response({ 'error': 'Something went wrong when logging out' })

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF cookie set' })