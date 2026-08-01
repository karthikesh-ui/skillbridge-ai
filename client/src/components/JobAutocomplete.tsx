import { useState, useRef, useEffect } from 'react';
import { Search, TrendingUp } from 'lucide-react';

interface JobSuggestion {
  title: string;
  salary: string;
  growth: string;
  trending: boolean;
}

const JOB_DATABASE: Record<string, JobSuggestion[]> = {
  'machine': [
    {
      title: 'Machine Learning Engineer',
      salary: '$150K - $250K',
      growth: '+45%',
      trending: true,
    },
    {
      title: 'Machine Learning Researcher',
      salary: '$140K - $240K',
      growth: '+42%',
      trending: true,
    },
    {
      title: 'Machine Learning Intern',
      salary: '$30K - $60K',
      growth: '+38%',
      trending: false,
    },
  ],
  'software': [
    {
      title: 'Software Engineer',
      salary: '$120K - $200K',
      growth: '+35%',
      trending: false,
    },
    {
      title: 'Senior Software Engineer',
      salary: '$160K - $280K',
      growth: '+28%',
      trending: false,
    },
  ],
  'data': [
    {
      title: 'Data Scientist',
      salary: '$130K - $220K',
      growth: '+40%',
      trending: true,
    },
    {
      title: 'Data Engineer',
      salary: '$140K - $230K',
      growth: '+48%',
      trending: true,
    },
  ],
  'ai': [
    {
      title: 'AI Engineer',
      salary: '$160K - $280K',
      growth: '+52%',
      trending: true,
    },
    {
      title: 'AI Researcher',
      salary: '$150K - $270K',
      growth: '+50%',
      trending: true,
    },
  ],
  'cloud': [
    {
      title: 'Cloud Engineer',
      salary: '$130K - $210K',
      growth: '+38%',
      trending: false,
    },
    {
      title: 'Cloud Architect',
      salary: '$160K - $260K',
      growth: '+32%',
      trending: false,
    },
  ],
  'cyber': [
    {
      title: 'Cyber Security Engineer',
      salary: '$120K - $200K',
      growth: '+55%',
      trending: true,
    },
  ],
  'ui': [
    {
      title: 'UI UX Designer',
      salary: '$90K - $160K',
      growth: '+25%',
      trending: false,
    },
  ],
  'full': [
    {
      title: 'Full Stack Developer',
      salary: '$110K - $190K',
      growth: '+30%',
      trending: false,
    },
  ],
  'devops': [
    {
      title: 'DevOps Engineer',
      salary: '$130K - $220K',
      growth: '+42%',
      trending: true,
    },
  ],
  'product': [
    {
      title: 'Product Manager',
      salary: '$130K - $220K',
      growth: '+28%',
      trending: false,
    },
  ],
};

interface JobAutocompleteProps {
  onSelect: (job: string) => void;
}

export default function JobAutocomplete({ onSelect }: JobAutocompleteProps) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<JobSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!input.trim()) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const query = input.toLowerCase();
    const results: JobSuggestion[] = [];

    for (const [key, jobs] of Object.entries(JOB_DATABASE)) {
      if (key.includes(query)) {
        results.push(...jobs);
      }
    }

    setSuggestions(results.slice(0, 6));
    setIsOpen(true);
  }, [input]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (job: JobSuggestion) => {
    setInput(job.title);
    setIsOpen(false);
    onSelect(job.title);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => input && setIsOpen(true)}
          placeholder="What job do you want to become?"
          className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-border rounded-xl shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {suggestions.map((job, index) => (
            <button
              key={index}
              onClick={() => handleSelect(job)}
              className="w-full px-4 py-3 text-left hover:bg-muted transition-colors duration-150 border-b border-border last:border-b-0"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">
                    {job.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {job.salary}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {job.trending && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                  <span className="text-xs font-semibold text-secondary">
                    {job.growth}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
