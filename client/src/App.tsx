import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WhatIsPlanner from "@/pages/basics/WhatIsPlanner";
import OperationGuide from "@/pages/tutorials/OperationGuide";
import TaskManagement from "@/pages/tutorials/TaskManagement";

import FAQ from "@/pages/support/FAQ";
import Contact from "@/pages/support/Contact";
import UseCases from "@/pages/scenarios/UseCases";

import Navigation from "@/components/Navigation";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/basics/what-is-planner" component={WhatIsPlanner} />
        <Route path="/tutorials/operation-guide" component={OperationGuide} />
        <Route path="/tutorials/task-management" component={TaskManagement} />

        <Route path="/support/faq" component={FAQ} />
        <Route path="/support/contact" component={Contact} />
        <Route path="/scenarios/use-cases" component={UseCases} />

        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router />
        <Toaster />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
