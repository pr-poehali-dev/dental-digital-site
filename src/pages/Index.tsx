import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Megaphone",
      title: "PR & Оффлайн-маркетинг",
      description: "Построение репутации и привлечение пациентов через традиционные каналы",
      features: ["Работа с медиа и пресс-релизами", "Организация событий и мероприятий", "Партнерские программы с врачами", "Репутационный менеджмент"]
    },
    {
      icon: "Bot",
      title: "AI-автоматизация",
      description: "Внедрение искусственного интеллекта для оптимизации работы клиники",
      features: ["Автоматизация записи пациентов", "AI-чат-боты для консультаций", "Прогнозирование потребностей", "Персонализация предложений"]
    },
    {
      icon: "Users",
      title: "Полный цикл пациента",
      description: "Комплексное сопровождение от первого контакта до лояльности",
      features: ["Настройка воронки продаж", "CRM-система для клиники", "Программы лояльности", "Аналитика и отчетность"]
    }
  ];

  const stats = [
    { number: "200+", label: "Клиник-партнеров" },
    { number: "50%", label: "Рост записей" },
    { number: "24/7", label: "Автоматизация" },
    { number: "98%", label: "Удовлетворенность" }
  ];

  const benefits = [
    {
      icon: "TrendingUp",
      title: "Увеличение прибыли",
      description: "Рост выручки на 30-50% благодаря оптимизации процессов"
    },
    {
      icon: "Clock",
      title: "Экономия времени",
      description: "Автоматизация рутинных задач освобождает время для пациентов"
    },
    {
      icon: "Target",
      title: "Точное таргетирование",
      description: "AI-алгоритмы находят идеальных пациентов для вашей практики"
    },
    {
      icon: "Shield",
      title: "Репутация онлайн",
      description: "Профессиональное управление отзывами и репутацией"
    }
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">
              Экспертиза в digital-стоматологии
            </h2>
            <p className="text-xl text-gray-600 font-text">
              Комплексные решения для роста и развития стоматологической практики
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

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">
              Преимущества работы с нами
            </h2>
            <p className="text-xl text-gray-600 font-text">
              Почему стоматологи выбирают наши digital-решения
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={benefit.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-display font-semibold text-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-text text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">
                  Готовы к росту?
                </h2>
                <p className="text-xl text-gray-600 mb-8 font-text">
                  Получите персональную консультацию по развитию вашей стоматологической практики
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="text-primary" size={20} />
                    <span className="text-gray-700 font-text">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="text-primary" size={20} />
                    <span className="text-gray-700 font-text">info@dentaldigital.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-primary" size={20} />
                    <span className="text-gray-700 font-text">Москва, Красная площадь, 1</span>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-display font-semibold text-black">
                    Бесплатная консультация
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-text">
                    Расскажите о своей клинике и получите план развития
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Имя" className="border-gray-200 font-text" />
                    <Input placeholder="Телефон" className="border-gray-200 font-text" />
                  </div>
                  <Input placeholder="Email" className="border-gray-200 font-text" />
                  <Textarea 
                    placeholder="Расскажите о своей клинике и задачах" 
                    className="border-gray-200 font-text min-h-[100px]"
                  />
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 font-text">
                    Получить консультацию
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
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-primary" size={24} />
                <span className="text-lg font-display font-semibold">DentalDigital</span>
              </div>
              <p className="text-gray-400 font-text">
                Digital-специалист для стоматологии. Полный цикл развития практики.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-display font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400 font-text">
                <li><a href="#" className="hover:text-white transition-colors">PR & Маркетинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI-автоматизация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Полный цикл пациента</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-display font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400 font-text">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-display font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400 font-text">
                <p>+7 (999) 123-45-67</p>
                <p>info@dentaldigital.ru</p>
                <p>Москва, Красная площадь, 1</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-text">
            <p>© 2024 DentalDigital. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;