import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToContact: () => void;
  handlePhoneClick: () => void;
}

const HeroSection = ({ scrollToContact, handlePhoneClick }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Инженерные системы <span className="text-primary">под ключ</span> для вашего дома
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Профессиональный монтаж электроснабжения, отопления, водоснабжения и канализации в частных домах. Работаем по Республике Татарстан — надёжно, быстро, с гарантией.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToContact}>
              <Icon name="Calculator" size={20} className="mr-2" />
              Получить расчёт бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={handlePhoneClick}>
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <a 
              href="https://wa.me/79992683030" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
              <span>WhatsApp</span>
            </a>
            <a 
              href="https://t.me/+79992683030" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <Icon name="Send" size={20} />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
