from django.shortcuts import render, redirect
from .models import HotelUser
from django.contrib.auth import authenticate, login , logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
# Create your views here.


class hotel_view(APIView):
    serializer_class = user_serializer

    def get(self, request):
        output = [{
            'username' : output.username, 
            'hotel_name' : output.hotel_name,
            'email' : output.email
        }
        for output in HotelUser.objects.all()]
        return Response(output)

class add_hotel_view(APIView):
    serializer_class = add_hotel_serializer
    def get(self, request):
        output = [{
            'username' : output.username, 
            'hotel_name' : output.hotel_name,
            'email' : output.email
        }
        for output in HotelUser.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = add_hotel_serializer(data = request.data)
        if serializer.is_valid(raise_exception=True):

            if(request.method == 'POST'):
                hotel_name = request.POST.get('hotel_name')
                username = request.POST.get('username')
                email = request.POST.get('email')
                password = request.POST.get('password')
                cpassword = request.POST.get('cpassword')

                print('Username : ', username)
                print('Hotelname : ', hotel_name)


                #if username already exists
                user = HotelUser.objects.filter(username = username)
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
                user = HotelUser.objects.create(
                    hotel_name = hotel_name,
                    username = username,
                    email = email,
                )

                user.set_password(password)
                user.save()

                context  = {
                    'id' : user.id,
                    'username' : user.username,
                    'name': user.hotel_name,
                    'email': user.email
                }
                #messages.info(request, 'Account created Successfully')
                # return getData_api(user_id = context.id)
                return render(request, 'hotel_login.html', context)
        
            serializer.save()
            return Response(serializer.data)
        

class getData_api(APIView):
    serializer_class = getData_serializer

    def post(self, request):
        serializer = getData_serializer(data = request.data)
        if serializer.is_valid(raise_exception=True):

        
            if(request.method == 'POST'):
                obj = HotelUser.objects.filter(username = request.POST.get('username'))
                obj.landmark = request.POST.get('landmark')
                obj.city = request.POST.get('city')
                obj.state = request.POST.get('state')
                obj.country = request.POST.get('country')
                obj.pincode = request.POST.get('pin')

                obj.prefix = request.POST.get('prefix')
                obj.mobile = request.POST.get('mobile')

                obj.visual_impaired =  request.POST.get('visual_impaired')
                obj.wheelchair_user =  request.POST.get('wheelchair_user')
                obj.speech_impaired =  request.POST.get('speech_impaired')
                obj.hearing_impaired =  request.POST.get('hearing_impaired')

                obj.roomtype1 = request.POST.get('name_type1')
                obj.pricetype1 = request.POST.get('price_type1')
                obj.numOftype1 = request.POST.get('cnt_type1')
                obj.facilityoftype1 = request.POST.get('extra_type1')

                obj.roomtype2 = request.POST.get('name_type2')
                obj.pricetype2 = request.POST.get('price_type2')
                obj.numOftype2 = request.POST.get('cnt_type2')
                obj.facilityoftype2 = request.POST.get('extra_type2')

                obj.roomtype3 = request.POST.get('name_type3')
                obj.pricetype3 = request.POST.get('price_type3')
                obj.numOftype3 = request.POST.get('cnt_type3')
                obj.facilityoftype3 = request.POST.get('extra_type3')





class hotel_login_view(APIView):
    serializer_class = hotel_login_serializer

    def post(self, request):
        serializer = hotel_login_serializer(data = request.data)
        if serializer.is_valid(raise_exception=True):

            if(request.method == 'POST'):
                username = request.POST.get('username')
                password = request.POST.get('password')

                if not HotelUser.objects.filter(username = username).exists():
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



@csrf_exempt
def hotel_register_page(request):

    if(request.method == 'POST'):
        hotel_name = request.POST.get('hotel_name')
        email = request.POST.get('email')
        username = request.POST.get('username')
        password = request.POST.get('password')

        #if username already exists
        user = HotelUser.objects.filter(username = username)
        if(user.exists()):
            messages.info(request, 'Username already taken')
            return redirect('/hotel_signup')

        #else create a new user
        user = HotelUser.objects.create(
            hotel_name = hotel_name,
            email = email,
            username = username,
        )

        user.set_password(password)
        user.save()
        print(" Current user id : " , user.id)
        print("Username: ", user.username)



        #messages.info(request, 'Account created Successfully')
        # return render(request,'hotel_getData.html', {'user_id' :user.id })
    return render(request, 'hotel_signup.html')

#Login 
def hotel_login(request):

    if(request.method == 'POST'):
        username = request.POST.get('username')
        password = request.POST.get('password')

        if not HotelUser.objects.filter(username = username).exists():
            # messages.error(request , 'Invalid Username')
            print('Invalid Username')
            return redirect('/hotel_login')
        
        user = authenticate(username = username, password= password)

        if(user is None):
            # messages.error(request, 'Invalid Password')
            print('Invalid Password')
            return redirect('/hotel_login')
        else:
            login(request,user)
            user_id = user.id
            # return redirect('/tripable', username = user.first_name)
            # return redirect('/tripable', args = username)
            hotel_obj = HotelUser.objects.get(id = user_id)
            # obj =  cb_data.objects.get(fk_id = user_id)
            # obj = get_object_or_404(cb_data, fk_id = user_id)

            print(hotel_obj)
            # print(obj)

            context = {
            'id': hotel_obj.id ,
            'name' : hotel_obj.hotel_name,
            'username': hotel_obj.username,
            'email' : hotel_obj.email
            
            }
            return render(request, 'hotel_welcome.html', context)
            # return redirect(request, '/hotel_getdata')
        
    return render(request, 'hotel_login.html')

#Hotel Data form
def hotel_getData_page(request, user_id):
    print(user_id)
    context = {}
    # id = Collaborator.objects.get(pk = cid)
    # obj = cb_data.objects.create(id = user_id)
    print('Inside cb_getData view : ', user_id)
    if(request.method == 'POST'):
        # user = User.objects.get(id=request.user.id),
        obj = HotelUser.objects.get(id = user_id)
        print(obj.username, obj.id)
        obj = HotelUser.objects.get(id = user_id)

        obj.landmark = request.POST.get('landmark')
        obj.city = request.POST.get('city')
        obj.state = request.POST.get('state')
        obj.country = request.POST.get('country')
        obj.pincode = request.POST.get('pin')

        obj.prefix = request.POST.get('prefix')
        obj.mobile = request.POST.get('mobile')

        if(request.POST.get('vi') == 'on'):
            obj.visual_impaired = 1
        
        if(request.POST.get('wi') == 'on'):
            obj.wheelchair_user = 1

        if(request.POST.get('si') == 'on'):
            obj.speech_impaired = 1

        if(request.POST.get('hi') == 'on'):
            obj.hearing_impaired = 1

        obj.roomtype1 = request.POST.get('name_type1')
        obj.pricetype1 = request.POST.get('price_type1')
        obj.numOftype1 = request.POST.get('cnt_type1')
        obj.facilityoftype1 = request.POST.get('extra_type1')

        obj.roomtype2 = request.POST.get('name_type2')
        obj.pricetype2 = request.POST.get('price_type2')
        obj.numOftype2 = request.POST.get('cnt_type2')
        obj.facilityoftype2 = request.POST.get('extra_type2')

        obj.roomtype3 = request.POST.get('name_type3')
        obj.pricetype3 = request.POST.get('price_type3')
        obj.numOftype3 = request.POST.get('cnt_type3')
        obj.facilityoftype3 = request.POST.get('extra_type3')

        obj.save()

        context = {
            'name' : obj.first_name,
            'username': obj.username,
            'landmark' : obj.landmark,
            'city' : obj.city, 
            'state' : obj.state,
            'country' : obj.country,
            'pincode' : obj.pincode,

            'prefix': obj.prefix ,
            'mobile': obj.mobile,
            'visual_impaired' : obj.visual_impaired,
            'wheelchair_user' : obj.wheelchair_user,
            'hearing_impaired' : obj.hearing_impaired,
            'speech_impaired' : obj.speech_impaired,

            'roomtype1' : obj.roomtype1 ,
            'roomtype2' : obj.roomtype2 ,
            'roomtype3' : obj.roomtype3 ,

            'pricetype1' : obj.pricetype1 ,
            'pricetype2' : obj.pricetype2 ,
            'pricetype3' : obj.pricetype3 ,

            'numOftype1' : obj.numOftype1, 
            'numOftype2' : obj.numOftype2 ,
            'numOftype3' : obj.numOftype3 ,

            'facilityoftype1' : obj.facilityoftype1,
            'facilityoftype2' : obj.facilityoftype2,
            'facilityoftype3' : obj.facilityoftype3
        }

        return render(request, 'hotel_printData.html', context)



    return render(request, 'hotel_getData.html', context)
    # return render(request, 'hotel_printData.html', context)
    # return (HttpResponseNotFound("<h1>Page not found</h1>"))
    # return redirect('/register_hotel',{'user_id': user_id})


def logoutUser(request):
    logout(request)
    return redirect('/hotel_login')