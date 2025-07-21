'use client';
import { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  dob: string;
  nationality: string;
  position: string;
  height: string;
  weight: string;
  foot: string;
  email: string;
  phone: string;
  description: string;
  videoPrimary: string;
  videoAdditional: string;
};

export default function PlayerSubmissionForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dob: '',
    nationality: '',
    position: '',
    height: '',
    weight: '',
    foot: '',
    email: '',
    phone: '',
    description: '',
    videoPrimary: '',
    videoAdditional: '',
  });
  const [submitted, setSubmitted] = useState(false);
 const [errors, setErrors] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const validateStep1 = () => {
    const requiredFields = [
      'firstName', 'lastName', 'dob', 'nationality', 'position',
      'height', 'weight', 'foot', 'email', 'phone'
    ];
    const newErrors = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const validateStep2 = () => {
    const newErrors: string[] = [];
    if (!formData.videoPrimary) newErrors.push('videoPrimary');
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
      setSubmitted(true);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const reloadForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      nationality: '',
      position: '',
      height: '',
      weight: '',
      foot: '',
      email: '',
      phone: '',
      description: '',
      videoPrimary: '',
      videoAdditional: '',
    });
    setSubmitted(false);
    setStep(1);
    setErrors([]);
  };

  const isError = (field: string) => errors.includes(field);


  const submitForm = () => {
    console.log('Submitting data:', formData);
    setSubmitted(true);
    setStep(3);
  };



  return (
    <section className="my-16 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${step >= s ? 'bg-accent-blue text-white' : 'bg-primary-secondary border border-divider text-primary-muted'}`}>{s === 3 ? <i className="fa-solid fa-check text-xs"></i> : s}</div>
                <span className={`text-sm font-medium ${step >= s ? 'text-primary-text' : 'text-primary-muted'}`}>{['Personal Details', 'Uploads', 'Complete'][i]}</span>
                {s < 3 && <div className="w-12 h-px bg-divider" />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="form-step bg-primary-secondary rounded-xl p-8 border border-divider shadow-lg">
              <h2 className="font-poppins font-semibold text-2xl mb-8 text-primary-text">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name' },
                  { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name' },
                  { label: 'Date of Birth', name: 'dob', type: 'date' },
                  {
                    label: 'Nationality',
                    name: 'nationality',
                    type: 'select',
                    options: ['', 'Brazil', 'Argentina', 'Spain', 'France', 'Germany', 'England'],
                  },
                  {
                    label: 'Position',
                    name: 'position',
                    type: 'select',
                    options: ['', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Striker'],
                  },
                  { label: 'Height (cm)', name: 'height', type: 'number', placeholder: '180' },
                  { label: 'Weight (kg)', name: 'weight', type: 'number', placeholder: '75' },
                  {
                    label: 'Preferred Foot',
                    name: 'foot',
                    type: 'select',
                    options: ['', 'Right', 'Left', 'Both'],
                  },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your.email@example.com', full: true },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+1 (555) 123-4567', full: true },
                  { label: 'Brief Description', name: 'description', type: 'textarea', placeholder: 'Tell us about your football experience...', full: true },
                ].map(({ label, name, type, placeholder, options, full }) => (
                  <div key={name} className={full ? 'md:col-span-2' : ''}>
                    <label className="block text-sm font-medium mb-2 text-primary-text">
                      {label} * {isError(name) && <span className="text-accent-error ml-2">(required)</span>}
                    </label>
                    {type === 'select' ? (
                      <select
                        name={name}
                        value={formData[name as keyof FormData]}
                        onChange={handleChange}
                        className={`w-full bg-primary-bg border rounded-md px-4 py-3 focus:border-accent-amber focus:outline-none ${isError(name) ? 'border-accent-error' : 'border-divider'}`}
                      >
                        {options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt || `Select your ${label.toLowerCase()}`}
                          </option>
                        ))}
                      </select>
                    ) : type === 'textarea' ? (
                      <textarea
                        name={name}
                        rows={4}
                        value={formData[name as keyof FormData]}
                        onChange={handleChange}
                        className={`w-full bg-primary-bg border rounded-md px-4 py-3 focus:border-accent-amber focus:outline-none ${isError(name) ? 'border-accent-error' : 'border-divider'}`}
                        placeholder={placeholder}
                      />
                    ) : (
                      <input
                        type={type}
                        name={name}
                        value={formData[name as keyof FormData]}
                        onChange={handleChange}
                        className={`w-full bg-primary-bg border rounded-md px-4 py-3 focus:border-accent-amber focus:outline-none ${isError(name) ? 'border-accent-error' : 'border-divider'}`}
                        placeholder={placeholder}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <button onClick={nextStep} className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
                  Next Step
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step bg-primary-secondary rounded-xl p-8 border border-divider shadow-lg">
              <h2 className="font-poppins font-semibold text-2xl mb-8 text-primary-text">Upload Documents</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="upload-section text-center border-2 border-dashed border-divider rounded-lg p-8">
                  <i className="fa-solid fa-image text-4xl text-primary-muted mb-4"></i>
                  <p className="text-primary-muted mb-2">Drag and drop your photo here</p>
                  <p className="text-sm text-primary-muted mb-4">JPG, PNG up to 5MB</p>
                  <button className="bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-2 rounded-md font-medium">Choose File</button>
                </div>
                <div className="upload-section text-center border-2 border-dashed border-divider rounded-lg p-8">
                  <i className="fa-solid fa-file-pdf text-4xl text-primary-muted mb-4"></i>
                  <p className="text-primary-muted mb-2">Upload your football CV</p>
                  <p className="text-sm text-primary-muted mb-4">PDF up to 10MB</p>
                  <input type='file' className="bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-2 rounded-md font-medium w-2/3" />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-medium text-lg mb-4 text-primary-text">Highlight Videos</h3>
                <div className="space-y-4">
                  <input
                    type="url"
                    name="videoPrimary"
                    value={formData.videoPrimary}
                    onChange={handleChange}
                    className="w-full bg-primary-bg border border-divider rounded-md px-4 py-3"
                    placeholder="Primary Highlight Video (YouTube/Vimeo URL)"
                  />
                  <input
                    type="url"
                    name="videoAdditional"
                    value={formData.videoAdditional}
                    onChange={handleChange}
                    className="w-full bg-primary-bg border border-divider rounded-md px-4 py-3"
                    placeholder="Additional Video Link (Optional)"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button onClick={prevStep} className="border border-divider hover:border-accent-amber text-primary-text px-8 py-3 rounded-md font-medium">
                  Previous
                </button>
                <button onClick={submitForm} className="bg-accent-green hover:bg-accent-green/90 text-white px-8 py-3 rounded-md font-medium">
                  Submit Profile
                </button>
              </div>
            </div>
          )}

          {step === 3 && submitted && (
            <div className="form-step bg-primary-secondary rounded-xl p-8 border border-divider shadow-lg text-center">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-check text-3xl text-white"></i>
                </div>
                <h2 className="font-poppins font-semibold text-2xl mb-4 text-primary-text">Profile Submitted Successfully!</h2>
                <p className="text-primary-muted mb-6">
                  Thank you for submitting your player profile. Our team will review your information and contact you within 48 hours.
                </p>
                <div className="bg-primary-bg rounded-lg p-6 border border-divider mb-6 text-left">
                  <h3 className="font-medium mb-3 text-primary-text">What happens next?</h3>
                  <ul className="text-primary-muted space-y-2">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-accent-green text-sm"></i> Profile review within 48 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-accent-green text-sm"></i> Email confirmation with next steps
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-accent-green text-sm"></i> Profile goes live on our platform
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={reloadForm} className="bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-3 rounded-md font-medium">
                    Submit Another Profile
                  </button>
                  <button className="border border-divider hover:border-accent-amber text-primary-text px-6 py-3 rounded-md font-medium">
                    View Player Profiles
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
