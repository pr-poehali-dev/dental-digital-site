import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Radio",
      title: "PR Оффлайн",
      description: "Радио, билборды, мероприятия, СМИ — комплексное продвижение в традиционных каналах",
      features: ["Радиореклама", "Билборды", "Мероприятия", "СМИ"]
    },
    {
      icon: "Bot",
      title: "AI Автоматизация",
      description: "Умные системы для оптимизации всех процессов стоматологической клиники",
      features: ["Чат-боты", "Автоматизация", "Аналитика", "Интеграции"]
    },
    {
      icon: "Target",
      title: "Полный цикл пациента",
      description: "От первого знакомства до удержания — управление всем путем клиента",
      features: ["Привлечение", "Конверсия", "Продажи", "Удержание"]
    }
  ];

  const stats = [
    { number: "300%", label: "Увеличение записей" },
    { number: "50%", label: "Снижение затрат" },
    { number: "95%", label: "Удержание пациентов" },
    { number: "24/7", label: "Автоматизация" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-primary" size={24} />
              <span className="text-xl font-display font-semibold text-black">DIGITAL DENTAL</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary text-white hover:bg-primary/90 font-text">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-black mb-6 text-balance">
                Digital-специалист для стоматологии
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-text">
                Полный цикл касания пациента: от видения на рынке до продажи и удержания. 
                PR, маркетинг, AI-автоматизация и оптимизация процессов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-text text-lg px-8 py-6">
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-text text-lg px-8 py-6">
                  Посмотреть кейсы
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/7b8f4e23-83a1-46fa-bfbb-e99609db8e9c.jpg" 
                alt="Современная стоматологическая клиника с digital-технологиями"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-text">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-black mb-6">
              Услуги
            </h2>
            <p className="text-xl text-gray-600 font-text">
              Комплексные решения для развития стоматологической практики
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl font-display font-semibold text-black mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-text">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 font-text">
                        <Icon name="Check" className="text-primary mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <img 
              src="/img/1f29743b-1e6b-4f3a-af2e-ba26f58125e2.jpg" 
              alt="Digital маркетинг для стоматологии"
              className="rounded-2xl shadow-xl mx-auto max-w-2xl w-full h-auto animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-black mb-6">
                Контакты
              </h2>
              <p className="text-xl text-gray-600 font-text">
                Готовы обсудить ваш проект? Свяжитесь со мной удобным способом
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-black mb-2">Email</h3>
                    <p className="text-gray-600 font-text">info@digitaldental.pro</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-black mb-2">Телефон</h3>
                    <p className="text-gray-600 font-text">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MessageSquare" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-black mb-2">Telegram</h3>
                    <p className="text-gray-600 font-text">@digitaldentalexpert</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-gray-50 border-0">
                <CardHeader>
                  <CardTitle className="font-display font-semibold text-black">
                    Написать сообщение
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-text text-gray-700">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-text text-gray-700">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-text text-gray-700">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашем проекте..."
                      className="bg-white border-gray-200 min-h-[120px]" 
                    />
                  </div>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 font-text">
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Zap" className="text-primary" size={24} />
              <span className="text-xl font-display font-semibold">DIGITAL DENTAL</span>
            </div>
            <p className="text-gray-400 font-text">
              Digital-специалист для стоматологии
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;