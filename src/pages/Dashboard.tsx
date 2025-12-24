import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { contractSections, Contract } from '@/data/contractsIndex';
import { Search, FileText, LogOut, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    toast.success('Sesión cerrada');
    navigate('/');
  };

  const handleGenerateContract = (contract: Contract) => {
    if (contract.available && contract.route) {
      navigate(contract.route);
    } else {
      toast.info('Este contrato estará disponible próximamente');
    }
  };

  const filteredSections = contractSections.map(section => ({
    ...section,
    contracts: section.contracts.filter(contract =>
      contract.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (contract.namePL && contract.namePL.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(section => section.contracts.length > 0);

  const totalContracts = contractSections.reduce((acc, section) => acc + section.contracts.length, 0);
  const availableContracts = contractSections.reduce(
    (acc, section) => acc + section.contracts.filter(c => c.available).length, 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/images/pgk-logo.png" 
                alt="PGK Hispania" 
                className="h-12 sm:h-16"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-bold" style={{ color: '#1e3a5f' }}>
                  Panel de Gestión de Contratos
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Panel Zarządzania Umowami
                </p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Cerrar Sesión</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Card */}
        <Card className="mb-8 border-l-4" style={{ borderLeftColor: '#1e3a5f' }}>
          <CardHeader>
            <CardTitle className="text-lg" style={{ color: '#1e3a5f' }}>
              Bienvenido al Panel de Gestión
            </CardTitle>
            <CardDescription>
              Desde aquí puedes generar todos los contratos disponibles para tus clientes. 
              Selecciona el tipo de contrato que necesitas del índice a continuación.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" style={{ color: '#1e3a5f' }} />
                <span><strong>{totalContracts}</strong> contratos en catálogo</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default" className="bg-green-600">
                  {availableContracts} disponible{availableContracts !== 1 ? 's' : ''}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500" />
                <span>{totalContracts - availableContracts} próximamente</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar contratos por nombre o descripción..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Contract Sections */}
        <Accordion type="multiple" defaultValue={['servicios-profesionales']} className="space-y-4">
          {filteredSections.map((section) => (
            <AccordionItem 
              key={section.id} 
              value={section.id}
              className="bg-white rounded-lg shadow-sm border"
            >
              <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline">
                <div className="flex flex-col items-start text-left">
                  <span className="font-semibold" style={{ color: '#1e3a5f' }}>
                    {section.title}
                  </span>
                  {section.titlePL && (
                    <span className="text-xs text-muted-foreground mt-1">
                      {section.titlePL}
                    </span>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {section.contracts.map((contract) => (
                    <Card 
                      key={contract.id}
                      className={`transition-all ${
                        contract.available 
                          ? 'hover:shadow-md cursor-pointer border-green-200 bg-green-50/30' 
                          : 'opacity-75 border-dashed'
                      }`}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <CardTitle className="text-sm font-medium leading-tight">
                              {contract.name}
                            </CardTitle>
                            {contract.namePL && (
                              <p className="text-xs text-muted-foreground mt-1 italic">
                                {contract.namePL}
                              </p>
                            )}
                          </div>
                          {contract.available ? (
                            <Badge className="bg-green-600 shrink-0">Disponible</Badge>
                          ) : (
                            <Badge variant="secondary" className="shrink-0">Próximamente</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-muted-foreground mb-3">
                          {contract.description}
                        </p>
                        <Button
                          size="sm"
                          onClick={() => handleGenerateContract(contract)}
                          disabled={!contract.available}
                          className="w-full"
                          style={contract.available ? { backgroundColor: '#1e3a5f' } : {}}
                        >
                          {contract.available ? 'Generar Contrato' : 'No disponible'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filteredSections.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                No se encontraron contratos que coincidan con tu búsqueda.
              </p>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Polska Grupa Konsultingowa S.L. — Panel de Gestión de Contratos
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
