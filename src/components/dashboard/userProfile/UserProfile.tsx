import UserProfile from '@/components/dashboard/userProfile/UserStats';
import { getAuthSession } from '@/lib/auth';

export default async function ProfilePage() {
  const session = await getAuthSession();

  if (!session?.user?.email) {
    return <div>Giriş yapmanız gerekiyor</div>;
  }

  const updatedAtRaw = session.user?.updated_at;

  let formatted = "Tarih bilgisi yok";

  if (updatedAtRaw) {
    try {
      const date = new Date(updatedAtRaw);
      console.log("Parsed Date:", date);
      console.log("Is Valid Date:", !isNaN(date.getTime()));
      
      if (!isNaN(date.getTime())) {
        formatted = date.toLocaleString('tr-TR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'UTC'
        });
        
        console.log("Formatted Date:", formatted);
      }
    } catch (error) {
      console.error("Tarih formatlanırken hata:", error);
      formatted = "Tarih formatlanamadı";
    }
  }


const now = new Date();
console.log("Şu anki tarih:", now);

const currentFormatted = now.toLocaleString('tr-TR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'Europe/Istanbul'
});


  const userData = {
    id: "1",
    name: session.user.name || "Kullanıcı",
    email: session.user.email,
    role: "admin",
    status: "active",
    createdAt: formatted,
    updatedAt: formatted,
    lastLogin: currentFormatted,
    location: "İstanbul, Türkiye",
    phone: "+90 555 123 45 67",
    image: null
  };

  return <UserProfile user={userData} />;
}