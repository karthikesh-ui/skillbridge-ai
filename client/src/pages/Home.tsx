import { useState } from 'react';
import {
  MessageCircle,
  Zap,
  FileText,
  Target,
  BarChart3,
  BookOpen,
  HelpCircle,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  ChevronDown,
  Play,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import AnimatedCounter from '@/components/AnimatedCounter';
import JobAutocomplete from '@/components/JobAutocomplete';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  const [selectedJob, setSelectedJob] = useState('');

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Career Chat',
      description: 'Have real-time conversations with AI about your career goals and get personalized advice.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI Career Roadmap',
      description: 'Get a personalized step-by-step roadmap tailored to your dream job and current skills.',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Resume Analyzer',
      description: 'Upload your resume and get AI-powered insights on how to improve it.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'ATS Score',
      description: 'Check your resume\'s ATS compatibility score and get optimization suggestions.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Skill Gap Analysis',
      description: 'Identify the gap between your current skills and the job requirements.',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Learning Path',
      description: 'Get curated learning resources and courses to bridge your skill gaps.',
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: 'Interview Questions',
      description: 'Practice with AI-generated interview questions specific to your target role.',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Resume Builder',
      description: 'Build a professional resume with AI-powered suggestions and templates.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Portfolio Suggestions',
      description: 'Get ideas for portfolio projects that will impress your target employers.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Job Market Insights',
      description: 'Stay updated with real-time job market trends and salary data.',
    },
  ];

  const roadmapSteps = [
    { step: 1, title: 'Enter Dream Job', icon: '🎯' },
    { step: 2, title: 'AI Understands Your Goal', icon: '🤖' },
    { step: 3, title: 'Skill Analysis', icon: '📊' },
    { step: 4, title: 'Personalized Roadmap', icon: '🗺️' },
    { step: 5, title: 'Resume Analysis', icon: '📄' },
    { step: 6, title: 'Interview Preparation', icon: '🎤' },
    { step: 7, title: 'Track Progress', icon: '✅' },
  ];

  const faqs = [
    {
      question: 'How does SkillBridge AI work?',
      answer:
        'SkillBridge AI uses advanced AI algorithms to analyze your current skills, understand your career goals, and generate a personalized roadmap. Simply enter your dream job, and our AI will provide comprehensive guidance on skills to develop, learning resources, and career strategies.',
    },
    {
      question: 'Is it free?',
      answer:
        'SkillBridge AI offers both free and premium plans. The free plan includes basic career analysis and roadmap generation. Premium plans unlock advanced features like unlimited resume reviews, interview preparation, and priority support.',
    },
    {
      question: 'How accurate is AI guidance?',
      answer:
        'Our AI is trained on millions of job postings, career paths, and industry data. While AI provides valuable insights, we recommend combining it with mentorship and real-world experience for the best results.',
    },
    {
      question: 'Can I upload my resume?',
      answer:
        'Yes! You can upload your resume in PDF or DOCX format. Our AI will analyze it, provide an ATS score, identify strengths and weaknesses, and suggest improvements.',
    },
    {
      question: 'Can I generate multiple roadmaps?',
      answer:
        'Absolutely! You can generate roadmaps for different career paths and compare them. This helps you explore multiple options before deciding on your next career move.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-secondary/8" />
          <img
            src="/manus-storage/hero-background_ab0c1efd.png"
            alt="Hero background"
            className="w-full h-full object-cover opacity-50"
          />
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-sm font-semibold text-accent">🚀 AI Career Transformation</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Your AI Career{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Coach Awaits
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              Enter your dream job. Our AI analyzes your potential, maps your path, and guides every step to get you there.
            </p>
          </div>

          {/* Search Box with enhanced styling */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="mb-4">
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">What's your dream role?</p>
            </div>
            <JobAutocomplete onSelect={setSelectedJob} />
            <Button
              size="lg"
              className="w-full mt-4 bg-gradient-to-r from-accent via-secondary to-primary hover:from-accent/90 hover:via-secondary/90 hover:to-primary/90 text-white font-bold h-14 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 text-lg"
            >
              ✨ Generate My Roadmap
            </Button>
          </div>

          {/* Popular Roles */}
          <div className="text-center mb-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Popular Roles</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                'Software Engineer',
                'AI Engineer',
                'Data Scientist',
                'Cloud Engineer',
                'Cyber Security Engineer',
              ].map((job) => (
                <button
                  key={job}
                  onClick={() => setSelectedJob(job)}
                  className="px-4 py-2 text-sm font-semibold text-primary border-2 border-primary/30 rounded-full hover:bg-primary/10 hover:border-primary/60 transition-all duration-200 hover:shadow-md"
                >
                  {job}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-16 sm:py-24 bg-gradient-to-b from-primary/8 via-accent/5 to-transparent border-t border-primary/10">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">Trusted by Thousands</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12">
            <AnimatedCounter target={50000} label="Students Guided" suffix="+" />
            <AnimatedCounter target={500} label="Career Paths" suffix="+" />
            <AnimatedCounter target={100000} label="Roadmaps Generated" suffix="+" />
            <AnimatedCounter target={250000} label="Resume Reviews" suffix="+" />
            <AnimatedCounter target={1000000} label="AI Responses" suffix="+" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 sm:py-32 bg-gradient-to-b from-transparent via-primary/3 to-transparent">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">The SkillBridge Process</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Your Path to Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Seven intelligent steps that transform your career dreams into a concrete, achievable roadmap.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {roadmapSteps.map((item, index) => (
                <div key={item.step} className="flex gap-6 sm:gap-8">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mb-2">
                      {item.step}
                    </div>
                    {index < roadmapSteps.length - 1 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-primary to-accent/30" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.step === 1 &&
                        'Enter the job title or role you aspire to become.'}
                      {item.step === 2 &&
                        'Our AI analyzes your goal and understands the requirements.'}
                      {item.step === 3 &&
                        'We evaluate your current skills and identify gaps.'}
                      {item.step === 4 &&
                        'Receive a personalized roadmap with milestones and timelines.'}
                      {item.step === 5 &&
                        'Get detailed feedback on your resume and how to improve it.'}
                      {item.step === 6 &&
                        'Practice with AI-generated interview questions and answers.'}
                      {item.step === 7 &&
                        'Monitor your progress and adjust your roadmap as needed.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Comprehensive Toolkit</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Everything to Land Your Dream Role
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              From skill analysis to interview prep, SkillBridge AI covers every step of your career journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Career Roadmap Preview */}
      <section id="roadmaps" className="py-20 sm:py-32 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Career Visualization</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                See Your Entire Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-medium">
                From your current skills to your dream role—every milestone, project, and achievement mapped out in one clear, actionable roadmap.
              </p>
              <div className="space-y-4">
                {[
                  'Current Position',
                  'Semester Planning',
                  'Required Skills',
                  'Projects',
                  'Certificates',
                  'Internships',
                  'Placement Preparation',
                  'Dream Job',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <img
                src="/manus-storage/feature-illustration-2_d4165536.png"
                alt="Career Roadmap"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skill Gap Preview */}
      <section id="skills" className="py-20 sm:py-32 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 order-2 lg:order-1">
              <img
                src="/manus-storage/feature-illustration-1_20e655fd.png"
                alt="Skill Gap Analysis"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Smart Analysis</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Know Exactly What to Learn
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-medium">
                Our AI compares your current abilities with job requirements, showing you exactly which skills to prioritize and how to acquire them.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Your Current Skills</h3>
                  <div className="space-y-2">
                    {['Python', 'Java', 'SQL', 'HTML', 'CSS'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Required Skills</h3>
                  <div className="space-y-2">
                    {['TensorFlow', 'Docker', 'AWS', 'FastAPI', 'LangChain'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Analysis Preview */}
      <section id="resume" className="py-20 sm:py-32 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Resume Optimization</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Land More Interviews
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Get an ATS score, identify strengths and weaknesses, and receive AI-powered suggestions to make your resume shine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-border">
              <div className="text-4xl font-bold text-accent mb-2">85</div>
              <p className="text-muted-foreground">ATS Score</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-border">
              <div className="text-lg font-semibold text-foreground mb-3">Strengths</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Clear structure</li>
                <li>✓ Relevant keywords</li>
                <li>✓ Good formatting</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-border">
              <div className="text-lg font-semibold text-foreground mb-3">Suggestions</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Add more metrics</li>
                <li>• Highlight achievements</li>
                <li>• Use action verbs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Preview */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Conversational AI</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Chat With Your AI Coach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Get personalized guidance, ask career questions, and receive actionable advice in real-time.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-border p-6 space-y-4">
            <div className="flex justify-end">
              <div className="bg-accent text-accent-foreground rounded-lg px-4 py-2 max-w-xs">
                I want to become an AI Engineer.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs space-y-2">
                <p className="font-semibold">Great choice! Here's what you need:</p>
                <ul className="text-sm space-y-1">
                  <li>• Recommended Skills: Python, TensorFlow, PyTorch</li>
                  <li>• Projects: Build 3-5 AI projects</li>
                  <li>• Timeline: 12-18 months</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Real Results</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Careers Transformed
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              Join thousands of students who landed their dream jobs with SkillBridge AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Chen',
                role: 'Software Engineer',
                company: 'Google',
                review:
                  'SkillBridge AI helped me identify the exact skills I needed and provided a clear roadmap. I landed my dream job at Google!',
              },
              {
                name: 'Alex Kumar',
                role: 'Data Scientist',
                company: 'Meta',
                review:
                  'The resume analysis was incredibly helpful. I improved my ATS score from 65 to 92 and got multiple interview calls.',
              },
              {
                name: 'Emma Rodriguez',
                role: 'AI Engineer',
                company: 'OpenAI',
                review:
                  'The personalized learning path saved me months of research. Highly recommend SkillBridge AI to anyone serious about their career!',
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <p className="font-semibold text-foreground">{story.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {story.role} at {story.company}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{story.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Partners */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Curated Resources</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Learn From the Best
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              We integrate with industry-leading platforms to deliver personalized learning paths.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {['Coursera', 'Udemy', 'Google', 'Microsoft', 'IBM'].map((partner) => (
              <div
                key={partner}
                className="w-32 h-16 rounded-lg bg-white dark:bg-slate-800 border border-border flex items-center justify-center font-semibold text-foreground/70 hover:text-foreground transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 sm:py-32 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Questions?</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              We Have Answers
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-border rounded-lg px-6 bg-white dark:bg-slate-800"
                >
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-medium">
            Your AI-powered career coach is ready to guide you to your dream role. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold h-14 rounded-xl transition-all duration-300 hover:shadow-xl text-base"
            >
              ✨ Generate My Roadmap
            </Button>
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/30 font-bold h-14 rounded-xl transition-all duration-300 hover:shadow-xl text-base"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-100 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/manus-storage/skillbridge-logo_6c8aaa8d.png"
                  alt="SkillBridge AI"
                  className="w-6 h-6"
                />
                <span className="font-bold">SkillBridge</span>
              </div>
              <p className="text-sm text-slate-400">
                AI-powered career guidance for students and professionals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#roadmaps" className="hover:text-white transition-colors">
                    Roadmaps
                  </a>
                </li>
                <li>
                  <a href="#resume" className="hover:text-white transition-colors">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2026 SkillBridge AI. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
