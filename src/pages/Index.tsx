
import { Github, Instagram, Globe, User, Sun, Moon, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center p-4 transition-colors duration-300">
      <div className="max-w-md w-full mx-auto text-center space-y-8">
        {/* Profile Image */}
        <div className="relative mx-auto">
          <div className="w-64 h-64 mx-auto rounded-full border-4 border-blue-500 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 transition-transform duration-300 hover:scale-150 cursor-pointer">
            <img 
              src="/lovable-uploads/ffd4ee17-051f-415a-b100-682e6dbb69ee.png" 
              alt="Alysson Almeida"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-black dark:text-white">Alysson Almeida</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Sênior Developer | Full-Stack</p>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-4 w-full max-w-sm mx-auto">
          <Button 
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
            onClick={() => window.open('https://asasdev.com.br/', '_blank')}
          >
            <Globe className="w-5 h-5 mr-2" />
            MEU SITE
          </Button>
          
          <Button 
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
            onClick={() => window.open('https://www.instagram.com/onildoalmeidaoficial', '_blank')}
          >
            <User className="w-5 h-5 mr-2" />
            TIO VEI ARRETADO
          </Button>
          
          <Button 
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
            onClick={() => window.open('https://github.com/asas-dev-web', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            GITHUB
          </Button>
          
          <Button 
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
            onClick={() => window.open('https://www.instagram.com/alysson.s.almeida/', '_blank')}
          >
            <Instagram className="w-5 h-5 mr-2" />
            INSTAGRAM
          </Button>
        </div>

        {/* Theme Toggle Button */}
        <div className="pt-8">
          <Button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-transparent border-none hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {theme === "dark" ? (
              <Sun className="w-8 h-8 text-yellow-400 animate-pulse" />
            ) : (
              <Moon className="w-8 h-8 text-blue-400 animate-pulse" />
            )}
          </Button>
        </div>

        {/* Footer */}
        <div className="pt-4 text-gray-600 dark:text-gray-500 text-sm flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center">
            <Settings className="w-2 h-2 text-gray-600 dark:text-gray-400 animate-spin" />
          </div>
          <a 
            href="https://asasdev.com.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Developed by: Asas Dev.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
