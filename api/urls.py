from django.urls import path
from .views import GetRoomView, JoinRoomView, RoomView, CreateRoomView

urlpatterns = [
    path("room", RoomView.as_view()),
    path("create-room", CreateRoomView.as_view()),
    path("get-room", GetRoomView.as_view()),
    path("join-room", JoinRoomView.as_view()),
]
