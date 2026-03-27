import React from 'react';
import { Reveal } from './Reveal';
import SectionHeader from './SectionHeader';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function Contact() {
  const whatsappNumber = '8981782619';
  const message = 'Hello, I want to join FITNESS FIRST. Please share details.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      createdAt: serverTimestamp(),
    };

    const path = 'leads';
    try {
      await addDoc(collection(db, path), data);
      setStatus('success');
      setResponseMsg('Your inquiry has been received! Our team will contact you soon.');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus('error');
      setResponseMsg('Something went wrong. Please try again.');
      handleFirestoreError(error, OperationType.CREATE, path);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Contact Us"
          description="Have questions? Ready to start your transformation? Get in touch with us or visit our facility."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <Reveal delay={0.2}>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2 italic uppercase tracking-wider">Our Location</h4>
                  <p className="text-gray-400">123 Fitness Street, Muscle City, MC 56789</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2 italic uppercase tracking-wider">Phone Number</h4>
                  <p className="text-gray-400">+1 (234) 567-890</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2 italic uppercase tracking-wider">Email Address</h4>
                  <p className="text-gray-400">info@fitnessfirst.com</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="p-8 bg-dark border-l-4 border-[#25D366]">
                <h4 className="text-xl font-display font-bold mb-4 italic uppercase tracking-wider text-[#25D366]">Quick Support</h4>
                <p className="text-gray-400 mb-6">Need an immediate response? Chat with our team directly on WhatsApp.</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-8 transition-colors uppercase tracking-widest text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal delay={0.6}>
            <form onSubmit={handleSubmit} className="bg-dark p-10 space-y-6 border-t-8 border-primary shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    className="w-full bg-secondary border border-white/10 p-4 focus:border-primary outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full bg-secondary border border-white/10 p-4 focus:border-primary outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                <select name="subject" className="w-full bg-secondary border border-white/10 p-4 focus:border-primary outline-none transition-colors appearance-none">
                  <option>Membership Inquiry</option>
                  <option>Personal Training</option>
                  <option>Free Trial Booking</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea
                  name="message"
                  className="w-full bg-secondary border border-white/10 p-4 focus:border-primary outline-none transition-colors h-32 resize-none"
                  placeholder="Tell us about your fitness goals..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
              </button>
              
              {status === 'success' && (
                <p className="text-[#25D366] font-bold text-center uppercase tracking-widest text-sm">{responseMsg}</p>
              )}
              {status === 'error' && (
                <p className="text-primary font-bold text-center uppercase tracking-widest text-sm">{responseMsg}</p>
              )}
            </form>
          </Reveal>
        </div>

        {/* Map Embed */}
        <Reveal delay={0.8} width="100%">
          <div className="mt-24 h-[450px] w-full grayscale contrast-125">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.9537353153166!3d-37.81033297975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1531818296339"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
