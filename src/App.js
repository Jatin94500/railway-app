import '../src/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Updated import
import Header from './Components/Header/Header';
import About from './Components/Pages/about';
import Contact from './Components/Pages/contact';
import Login from './Components/Pages/login';
import Registration from './Components/Pages/Registration';
import { ThemeProvider } from './ThemeContext';
import HomePage from './Components/Home Page/Home Page';
import StudentDashboard from './Components/Pages/StudentDashboard';
import Footer from './Components/Pages/Footer';
import DashboardHome from './Components/admin/DashboardHome';
import ApproveForms from './Components/admin/ApproveForms';
import StudentProfiles from './Components/admin/StudentProfiles';
import Notifications from './Components/admin/Notifications';
import SelectionTracker from './Components/admin/SelectionTracker';
import AdminLogin from './Components/admin/AdminLogin'; // Import AdminLogin component
import Navbar from './Components/admin/Navbar';
import admin from './Components/admin/admin'; // Import admin routes
import DocumentVerification from './Components/admin/DocumentVerification'; // Import DocumentVerification component
import MeritList from './Components/admin/MeritList'; // Import MeritList component
import DomainBatchManagement from './Components/admin/DomainBatchManagement'; // Import DomainBatchManagement component
import CourseModule from './Components/Pages/CourseModule';


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <div className='notice'> This side is under maintenance </div>
          <Header />
          <div>
          <Routes> {/* Use Routes and Route for routing */}
            <Route path="/" element={<HomePage />} /> {/* Content for the homepage */}
            <Route path="/about" element={<About />} /> {/* About page */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/course-modules" element={<CourseModule/>} /> {/* Placeholder for course modules */}
            <Route path="*" element={<h1>404 Not Found</h1>} /> {/* Fallback for unmatched routes */}
            <Route path="/Adminlogin" element={<AdminLogin />} /> 
            <Route path="/register" element={<Registration />} /> {/* Placeholder for register page */}
            <Route path="/student-dashboard" element={<StudentDashboard />} /> {/* Student Dashboard */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/forms" element={<ApproveForms />} />
            <Route path="/admin/students" element={<StudentProfiles />} />
            <Route path="/admin/notifications" element={<Notifications />} />
            <Route path="/admin/tracker" element={<SelectionTracker />} />
            <Route path="/admin/navbar" element={<Navbar />} /> {/* Placeholder for Admin Navbar */}
            <Route path="login" element={<Login />} />
            <Route path="/admin/documents" element={<DocumentVerification />} />
            <Route path='/admin/DocumentVerification' element={<DocumentVerification />} />
            <Route path='/admin/meritlist' element={<MeritList />} /> {/* Placeholder for Merit List */}
            <Route path="/admin/dashboard" element={<DashboardHome />} /> {/* Admin Dashboard */}
            <Route path="/admin/domain-batch" element={<DomainBatchManagement />} /> {/* Domain Batch Management */}
            <Route path="/admin" element={<admin />} /> {/* Admin routes */}
          </Routes>
          </div>
          
          
          <Footer />

        </div>
      </BrowserRouter>

    </ThemeProvider>

  );
}

export default App;
