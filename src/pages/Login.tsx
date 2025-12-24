import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from 'sonner';

const VALID_EMAIL = 'KLIENT@PGKHISZPANIA.COM';
const VALID_PASSWORD = 'ASESOR1';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (email.toUpperCase() === VALID_EMAIL && password === VALID_PASSWORD) {
        sessionStorage.setItem('isAuthenticated', 'true');
        toast.success('Acceso concedido');
        navigate('/contrato');
      } else {
        toast.error('Credenciales incorrectas');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center space-y-4 pb-2">
          <img 
            src="/images/pgk-logo.png" 
            alt="PGK Hispania" 
            className="h-24 mx-auto"
          />
          <h1 className="text-xl font-bold" style={{ color: '#1e3a5f' }}>
            Acceso al Generador de Contratos
          </h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
              style={{ backgroundColor: '#1e3a5f' }}
            >
              {isLoading ? 'Verificando...' : 'Acceder'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
