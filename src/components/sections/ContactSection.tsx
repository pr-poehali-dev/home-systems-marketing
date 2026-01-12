import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
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
                  <Icon name="MessageSquare" className="text-primary" />
                  Мессенджеры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href="https://wa.me/79992683030" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-sm text-gray-600">Написать в WhatsApp</p>
                  </div>
                </a>
                <a 
                  href="https://t.me/+79992683030" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="Send" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telegram</p>
                    <p className="text-sm text-gray-600">Написать в Telegram</p>
                  </div>
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
  );
};

export default ContactSection;
