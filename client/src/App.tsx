import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import WhatIsPlanner from "@/pages/basics/WhatIsPlanner";
import OperationGuide from "@/pages/tutorials/OperationGuide";
import TaskManagement from "@/pages/tutorials/TaskManagement";
import ChartOverview from "@/pages/dashboard/ChartOverview";

import FAQ from "@/pages/support/FAQ";
import Contact from "@/pages/support/Contact";
import UseCases from "@/pages/scenarios/UseCases";

import Navigation from "@/components/Navigation";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

function Router() {
  return (
    // 👇 看好了！原本的 div 和 Navigation 都砍了，直接用 Layout 當最外層的 Wrapper！
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/basics/what-is-planner" component={WhatIsPlanner} />
        <Route path="/tutorials/operation-guide" component={OperationGuide} />
        <Route path="/tutorials/task-management" component={TaskManagement} />
        <Route path="/dashboard" component={ChartOverview} />

        <Route path="/support/faq" component={FAQ} />
        <Route path="/support/contact" component={Contact} />
        <Route path="/scenarios/use-cases" component={UseCases} />

        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider switchable>
      <ErrorBoundary>
        <Router />
        <Toaster />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
