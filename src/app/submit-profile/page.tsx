'use client';
import { Label } from '@/components/ui/label';
import { useRef, useState } from 'react';

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

  const [photo, setPhoto] = useState<File | null>(null);
  const [cv, setCv] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const photoInputRef = useRef<HTMLInputElement | null>(null);
  const cvInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep1 = () => {
    const required = ['firstName', 'lastName', 'dob', 'nationality', 'position', 'height', 'weight', 'foot', 'email', 'phone'];
    const errs = required.filter(f => !formData[f as keyof FormData]);
    setErrors(errs);
    return errs.length === 0;
  };

  const validateStep2 = () => {
    const errs: string[] = [];
    if (!formData.videoPrimary) errs.push('videoPrimary');
    if (!photo) errs.push('photo');
    if (!cv) errs.push('cv');
    setErrors(errs);
    return errs.length === 0;
  };

  const isError = (field: string) => errors.includes(field);

  const nextStep = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) submitForm();
  };

  const prevStep = () => setStep(step - 1);

  const reloadForm = () => {
    setFormData({
      firstName: '', lastName: '', dob: '', nationality: '', position: '',
      height: '', weight: '', foot: '', email: '', phone: '',
      description: '', videoPrimary: '', videoAdditional: ''
    });
    setPhoto(null); setCv(null); setStep(1); setSubmitted(false); setErrors([]);
  };

  const submitForm = () => {
    console.log('Form submitted:', { ...formData, photo, cv });
    setSubmitted(true);
    setStep(3);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'photo' | 'cv') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = type === 'photo' ? ['image/jpeg', 'image/png'] : ['application/pdf'];
    const maxSize = type === 'photo' ? 5 * 1024 * 1024 : 10 * 1024 * 1024;

    if (!validTypes.includes(file.type)) return setUploadError(`${type === 'photo' ? 'Photo' : 'CV'} type is invalid`);
    if (file.size > maxSize) return setUploadError(`${type === 'photo' ? 'Photo' : 'CV'} is too large`);

    type === 'photo' ? setPhoto(file) : setCv(file);
    setUploadError(null);
  };

  const triggerFileInput = (type: 'photo' | 'cv') => {
    (type === 'photo' ? photoInputRef : cvInputRef).current?.click();
  };

  return (
    <section className="my-16 pb-16 md:pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Stepper */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${step >= s ? 'bg-accent-red text-white' : 'bg-primary-secondary border border-divider text-primary-muted'}`}>
                {s === 3 ? <i className="fa-solid fa-check text-xs"></i> : s}
              </div>
              <span className={`text-sm font-medium ${step >= s ? 'text-primary-text' : 'text-primary-muted'}`}>{['Personal Details', 'Uploads', 'Complete'][i]}</span>
              {s < 3 && <div className="w-12 h-px bg-divider" />}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="bg-primary-secondary rounded-xl p-8 border border-divider shadow-lg">
            <h2 className="font-poppins font-semibold text-2xl mb-8 text-primary-text">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'First Name', name: 'firstName' },
                { label: 'Last Name', name: 'lastName' },
                { label: 'Date of Birth', name: 'dob', type: 'date' },
                { label: 'Nationality', name: 'nationality', type: 'select', options: ['', 'Brazil', 'Argentina', 'Spain', 'France', 'Germany', 'England'] },
                { label: 'Position', name: 'position', type: 'select', options: ['', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Striker'] },
                { label: 'Height (cm)', name: 'height', type: 'number' },
                { label: 'Weight (kg)', name: 'weight', type: 'number' },
                { label: 'Preferred Foot', name: 'foot', type: 'select', options: ['', 'Right', 'Left', 'Both'] },
                { label: 'Email Address', name: 'email', type: 'email', full: true },
                { label: 'Phone Number', name: 'phone', type: 'tel', full: true },
                { label: 'Brief Description', name: 'description', type: 'textarea', full: true },
              ].map(({ label, name, type = 'text', options, full }) => (
                <div key={name} className={full ? 'md:col-span-2' : ''}>
                  <Label className="block text-sm font-medium mb-2 text-primary-text">
                    {label} * {isError(name) && <span className="text-accent-error ml-2">(required)</span>}
                  </Label>
                  {type === 'select' ? (
                    <select name={name} value={formData[name as keyof FormData]} onChange={handleChange}
                      className={`w-full bg-primary-bg border rounded-md px-4 py-3 ${isError(name) ? 'border-accent-error' : 'border-divider'}`}>
                      {options?.map(opt => <option key={opt} value={opt}>{opt || `Select your ${label}`}</option>)}
                    </select>
                  ) : type === 'textarea' ? (
                    <textarea name={name} value={formData[name as keyof FormData]} onChange={handleChange} rows={4}
                      className={`w-full bg-primary-bg border rounded-md px-4 py-3 ${isError(name) ? 'border-accent-error' : 'border-divider'}`} />
                  ) : (
                    <input type={type} name={name} value={formData[name as keyof FormData]} onChange={handleChange}
                      className={`w-full bg-primary-bg border rounded-md px-4 py-3 ${isError(name) ? 'border-accent-error' : 'border-divider'}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <button onClick={nextStep} className="bg-accent-red text-white px-8 py-3 rounded-md">Next Step</button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="bg-primary-secondary rounded-xl p-8 border border-divider shadow-lg">
            <h2 className="font-poppins font-semibold text-2xl mb-8 text-primary-text">Upload Documents</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Photo */}
              <div className={`text-center border-2 ${isError('photo') ? 'border-accent-error' : 'border-dashed border-divider'} rounded-lg p-8`}>
                <i className="fa-solid fa-image text-4xl text-primary-muted mb-4"></i>
                <p className="text-primary-muted mb-2">{photo ? `Selected: ${photo.name}` : 'Drag and drop your photo here'}</p>
                <p className="text-sm text-primary-muted mb-4">JPG, PNG up to 5MB</p>
                <button onClick={() => triggerFileInput('photo')} className="bg-accent-red text-white px-6 py-2 rounded-md">Choose File</button>
                <input ref={photoInputRef} type="file" className="hidden" accept=".png,.jpg,.jpeg" onChange={(e) => handleFileUpload(e, 'photo')} />
              </div>

              {/* CV */}
              <div className={`text-center border-2 ${isError('cv') ? 'border-accent-error' : 'border-dashed border-divider'} rounded-lg p-8`}>
                <i className="fa-solid fa-file-pdf text-4xl text-primary-muted mb-4"></i>
                <p className="text-primary-muted mb-2">{cv ? `Uploaded: ${cv.name}` : 'Upload your football CV'}</p>
                <p className="text-sm text-primary-muted mb-4">PDF up to 10MB</p>
                <button onClick={() => triggerFileInput('cv')} className="bg-accent-red text-white px-6 py-2 rounded-md">Choose File</button>
                <input ref={cvInputRef} type="file" className="hidden" accept=".pdf" onChange={(e) => handleFileUpload(e, 'cv')} />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-lg mb-4 text-primary-text">Highlight Videos</h3>
              <input type="url" name="videoPrimary" value={formData.videoPrimary} onChange={handleChange}
                className={`w-full bg-primary-bg border rounded-md px-4 py-3 mb-4 ${isError('videoPrimary') ? 'border-accent-error' : 'border-divider'}`}
                placeholder="Primary Highlight Video (YouTube/Vimeo)" />
              <input type="url" name="videoAdditional" value={formData.videoAdditional} onChange={handleChange}
                className="w-full bg-primary-bg border border-divider rounded-md px-4 py-3"
                placeholder="Additional Video Link (Optional)" />
            </div>

            {uploadError && <p className="text-accent-error mt-4">{uploadError}</p>}

            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="border border-divider px-8 py-3 rounded-md text-primary-text">Previous</button>
              <button onClick={nextStep} className="bg-accent-green text-white px-8 py-3 rounded-md">Submit Profile</button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && submitted && (
          <div className="bg-primary-secondary rounded-xl p-8 border border-divider shadow-lg text-center">
            <div className="w-20 h-20 bg-accent-green rounded-full mx-auto flex items-center justify-center mb-6">
              <i className="fa-solid fa-check text-white text-3xl"></i>
            </div>
            <h2 className="text-2xl font-semibold text-primary-text mb-4">Profile Submitted Successfully!</h2>
            <p className="text-primary-muted mb-6">Our team will review your profile and reach out in 48 hours.</p>
            <div className="bg-primary-bg p-6 border border-divider rounded-lg text-left mb-6">
              <h3 className="font-medium text-primary-text mb-3">Next Steps:</h3>
              <ul className="text-primary-muted space-y-2">
                <li><i className="fa-solid fa-check text-accent-green mr-2 text-sm"></i> Review within 48 hours</li>
                <li><i className="fa-solid fa-check text-accent-green mr-2 text-sm"></i> Email confirmation</li>
                <li><i className="fa-solid fa-check text-accent-green mr-2 text-sm"></i> Profile listed on platform</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={reloadForm} className="bg-accent-red text-white px-6 py-3 rounded-md">Submit Another Profile</button>
              <button className="border border-divider px-6 py-3 rounded-md text-primary-text">View Player Profiles</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
