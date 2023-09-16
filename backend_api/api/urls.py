from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),
]

# backend_api/api/urls.py



router = DefaultRouter()
router.register(r'impromptu', views.ImpromptuTopicViewSet)

# ... (similar routes for other models)

urlpatterns = [
    path('', include(router.urls)),
]
