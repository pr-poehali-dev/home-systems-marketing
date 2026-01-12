import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+79992683030';
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header handlePhoneClick={handlePhoneClick} />

      <HeroSection scrollToContact={scrollToContact} handlePhoneClick={handlePhoneClick} />

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

      <GallerySection />

      <ContactSection />

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
