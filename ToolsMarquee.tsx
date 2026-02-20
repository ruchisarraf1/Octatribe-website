import { 
  Figma, 
  Chrome, 
  FileSpreadsheet, 
  BarChart3, 
  Search, 
  Palette,
  Code2,
  Layers
} from 'lucide-react';

const tools = [
  { name: 'Google Analytics', icon: BarChart3 },
  { name: 'Search Console', icon: Search },
  { name: 'Figma', icon: Figma },
  { name: 'Adobe Suite', icon: Palette },
  { name: 'WordPress', icon: Layers },
  { name: 'Google Sheets', icon: FileSpreadsheet },
  { name: 'Google Ads', icon: Chrome },
  { name: 'Elementor', icon: Code2 },
];

const ToolsMarquee = () => {
  return (
    <section className="py-12 bg-secondary/50 border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {/* First set */}
          {tools.map((tool, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center gap-3 mx-12 min-w-max"
            >
              <tool.icon className="w-8 h-8 text-muted-foreground" />
              <span className="text-lg font-medium text-muted-foreground">{tool.name}</span>
            </div>
          ))}
          {/* Second set for seamless loop */}
          {tools.map((tool, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-3 mx-12 min-w-max"
            >
              <tool.icon className="w-8 h-8 text-muted-foreground" />
              <span className="text-lg font-medium text-muted-foreground">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsMarquee;
