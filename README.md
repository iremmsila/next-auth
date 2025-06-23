🔐 Auth0 Entegrasyonu – Next.js Uygulaması
Bu proje, Auth0 kimlik sağlayıcısını kullanarak kullanıcıların e-posta/şifre ve sosyal oturum açma seçenekleri ile güvenli bir şekilde giriş yapmalarını sağlamaktadır. Geliştirilen yapı test edilebilirlik, rol tabanlı erişim kontrolü ve sade kullanıcı deneyimi odaklıdır.

📦 Kullanılan Teknolojiler
Next.js

Auth0 (NextAuth.js ile birlikte)

TypeScript

Tailwind CSS

Role-based Authorization

Modern UI


🔐 Kimlik Doğrulama ve Yetkilendirme Özeti
Bu proje, kullanıcı deneyimini artırmak amacıyla Auth0, Google ve GitHub olmak üzere üç farklı giriş seçeneği sunan güvenli bir kimlik doğrulama sistemi içerir.

🚫 Yetkisiz erişim engellenmiştir: Kullanıcılar giriş yapmadan /dashboard gibi korunan sayfalara doğrudan URL üzerinden erişemez.

🛡️ Rol tabanlı yetkilendirme (RBAC) uygulanmaktadır:

Giriş yapan kullanıcıların rolleri kontrol edilir.

Yönetici paneli, yalnızca admin rolüne sahip kullanıcılara görünür ve erişilebilir hale gelir.

✅ Bu yapı, kimlik doğrulama ve yetkilendirme süreçlerinin güvenli ve kullanıcı dostu bir şekilde yönetilmesini sağlar.


✅ Test Durumu
Gerekli testler gerçekleştirilmiş ve başarıyla tamamlanmıştır:

Auth Configuration

✅ Auth0 sağlayıcı konfigürasyonu doğru şekilde yapılandırılmıştır

✅ JWT stratejisi doğru şekilde tanımlanmıştır

✅ Gerekli callback fonksiyonları başarıyla uygulanmıştır



🖼️ Uygulamaya Dair Görseller


#### 🔑 Giriş Ekranı
![image](https://github.com/user-attachments/assets/18ee004a-32eb-4437-9f67-7ae1aff529e5)


#### 📊 Dashboard Görünümü
![image](https://github.com/user-attachments/assets/0ae3cab3-cde8-4901-a3c4-5267a4755717)

#### 🛠️ Admin Paneli
![image](https://github.com/user-attachments/assets/8ad291d7-2c44-47a8-8de7-de491ba1df47)



