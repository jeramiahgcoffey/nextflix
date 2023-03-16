import Input from '@/components/inputs/Input';
import { useCallback, useState } from 'react';

interface ICredentials {
  email: string;
  name: string;
  password: string;
}

const initialCredentialsState: ICredentials = {
  email: '',
  name: '',
  password: '',
};

const Auth = () => {
  const [variant, setVariant] = useState('login');

  const [credentials, setCredentials] = useState<ICredentials>(
    initialCredentialsState
  );

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCredentials((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (variant === 'login') {
      console.log('login', { credentials });
    } else {
      console.log('register', { credentials });
    }
    setCredentials(initialCredentialsState);
  };

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 mx-12 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign in' : 'Sign up'}
            </h2>
            <form>
              <div className="flex flex-col gap-4">
                {variant === 'register' && (
                  <Input
                    id="name"
                    label="Username"
                    value={credentials.name}
                    onChange={handleInputChange}
                  />
                )}
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                />
                <Input
                  id="password"
                  label="Password"
                  value={credentials.password}
                  onChange={handleInputChange}
                />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transistion capitalize"
              >
                {variant}
              </button>
            </form>
            <p className="text-neutral-500 mt-12">
              {variant === 'login'
                ? 'First time using Netflix?'
                : 'Already have an account?'}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;