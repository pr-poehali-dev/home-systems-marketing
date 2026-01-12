import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  handlePhoneClick: () => void;
}

const Header = ({ handlePhoneClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">МонтажСервис</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Фото работ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="https://wa.me/79992683030" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="MessageCircle" size={20} className="text-white" />
            </a>
            <a 
              href="https://t.me/+79992683030" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="Send" size={20} className="text-white" />
            </a>
            <Button size="lg" onClick={handlePhoneClick}>
              <Icon name="Phone" size={18} className="mr-2" />
              +7 999 268-30-30
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
