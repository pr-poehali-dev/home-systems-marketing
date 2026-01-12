import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import PhotoGallery from '@/components/PhotoGallery';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+79992683030';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const services = [
    {
      icon: 'Zap',
      title: 'Электроснабжение',
      description: 'Проектирование и монтаж электрощитов, прокладка кабелей, установка розеток и выключателей. Подключение к центральной сети или автономные решения.',
      features: ['Электрощиты и автоматика', 'Прокладка кабелей', 'УЗО и защита', 'Умный дом']
    },
    {
      icon: 'Flame',
      title: 'Системы отопления',
      description: 'Газовое и электрическое отопление, монтаж котлов, радиаторов, тёплых полов. Автоматизация климат-контроля для максимального комфорта.',
      features: ['Монтаж котлов', 'Радиаторы и тёплые полы', 'Автоматизация', 'Газовое/электрическое']
    },
    {
      icon: 'Droplets',
      title: 'Водоснабжение',
      description: 'Подключение к центральной системе или скважине, установка насосных станций, фильтров, гидроаккумуляторов. Разводка по всему дому.',
      features: ['Подключение к сети/скважине', 'Насосные станции', 'Фильтрация воды', 'Водонагреватели']
    },
    {
      icon: 'Waves',
      title: 'Канализация',
      description: 'Септики, локальные очистные сооружения, внутренняя и наружная канализация. Дренажные системы для отвода воды.',
      features: ['Септики и ЛОС', 'Внутренняя канализация', 'Дренаж участка', 'Ливневая канализация']
    }
  ];

  const advantages = [
    { icon: 'Award', title: 'Опыт более 15 лет', description: 'Выполнили более 300 проектов' },
    { icon: 'ShieldCheck', title: 'Гарантия до 5 лет', description: 'Письменная гарантия на все работы' },
    { icon: 'Users', title: 'Собственные бригады', description: 'Штатные мастера с образованием' },
    { icon: 'CheckCircle', title: 'Сертифицированное оборудование', description: 'Bosch, Grundfos, Schneider Electric' },
    { icon: 'FileText', title: 'Прозрачная смета', description: 'Фиксированная цена без скрытых платежей' },
    { icon: 'Truck', title: 'Бесплатный выезд', description: 'Специалист приедет на объект бесплатно' }
  ];

  const projects = [
    {
      title: 'Загородный дом 250 м²',
      description: 'Полный монтаж всех инженерных систем: электричество, отопление, вода, канализация',
      image: 'https://cdn.poehali.dev/projects/4893db6d-5019-44d3-8b6f-5b8473b21b21/files/276c249a-08cc-4b62-b194-0c89295d5c1b.jpg',
      duration: '45 дней',
      systems: ['Электроснабжение', 'Отопление', 'Водоснабжение', 'Канализация']
    },
    {
      title: 'Коттедж 180 м²',
      description: 'Автономное электроснабжение с солнечными панелями и система водоочистки',
      image: 'https://cdn.poehali.dev/projects/4893db6d-5019-44d3-8b6f-5b8473b21b21/files/b71ba7c9-c6d7-41e6-9896-14ebc97022a9.jpg',
      duration: '30 дней',
      systems: ['Электроснабжение', 'Водоснабжение']
    },
    {
      title: 'Дом 320 м²',
      description: 'Газовое отопление с тёплыми полами, септик и дренажная система',
      image: 'https://cdn.poehali.dev/projects/4893db6d-5019-44d3-8b6f-5b8473b21b21/files/ff353b2e-b91f-4335-9d61-12acc7ef2bb2.jpg',
      duration: '60 дней',
      systems: ['Отопление', 'Канализация']
    }
  ];

  const galleryPhotos = [
    { url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800', title: 'Монтаж электрощитовой', category: 'Электроснабжение' },
    { url: 'https://images.unsplash.com/photo-1581092918484-8313e1f151e6?w=800', title: 'Установка газового котла', category: 'Отопление' },
    { url: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800', title: 'Разводка водоснабжения', category: 'Водоснабжение' },
    { url: 'https://images.unsplash.com/photo-1581092583537-20d51876f3e5?w=800', title: 'Монтаж тёплого пола', category: 'Отопление' },
    { url: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800', title: 'Установка септика', category: 'Канализация' },
    { url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800', title: 'Подключение электрики', category: 'Электроснабжение' },
    { url: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800', title: 'Радиаторы отопления', category: 'Отопление' },
    { url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800', title: 'Система фильтрации воды', category: 'Водоснабжение' },
    { url: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800', title: 'Прокладка труб', category: 'Водоснабжение' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">МонтажСервис</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Фото работ</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex" size="lg" onClick={handlePhoneClick}>
              <Icon name="Phone" size={18} className="mr-2" />
              +7 999 268-30-30
            </Button>
          </div>
        </div>
      </header>

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
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Комплексные решения для вашего дома</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-secondary" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Гарантия качества и профессионализма</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size={36} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Наши проекты</h2>
            <p className="text-xl text-gray-600">Реальные результаты нашей работы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <Icon name="Clock" size={16} />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.systems.map((system, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {system}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Фотографии наших работ</h2>
            <p className="text-xl text-gray-600">Нажмите на фото, чтобы увеличить</p>
          </div>
          <PhotoGallery photos={galleryPhotos} />
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Оставьте заявку и получите бесплатный расчёт</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Отправить заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Адель"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 999 268-30-30"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Тип работ</Label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    >
                      <option value="">Выберите услугу</option>
                      <option value="electric">Электроснабжение</option>
                      <option value="heating">Отопление</option>
                      <option value="water">Водоснабжение</option>
                      <option value="sewage">Канализация</option>
                      <option value="all">Все системы</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+79992683030" className="text-2xl font-semibold text-primary hover:underline">
                    +7 999 268-30-30
                  </a>
                  <p className="text-sm text-gray-600 mt-2">Ежедневно с 8:00 до 20:00</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:montazh_rt@mail.ru" className="text-lg text-primary hover:underline">
                    montazh_rt@mail.ru
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    География работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">Работаем по всей России</p>
                  <p className="text-sm text-gray-600">Возможность расширения географии по запросу</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" className="text-primary" size={28} />
                <span className="text-xl font-bold">МонтажСервис</span>
              </div>
              <p className="text-gray-400">Профессиональный монтаж инженерных систем для вашего дома</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Электроснабжение</li>
                <li>Системы отопления</li>
                <li>Водоснабжение</li>
                <li>Канализация</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 999 268-30-30
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  montazh_rt@mail.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 МонтажСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;