import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import Footer from '../pageComponents/footer'; 
import Header from '../pageComponents/header';

/**
 * Renders the registration page for new users.
 * This component displays a registration form allowing users to create an account
 * by providing their name, email address, and password. It also includes branding
 * and descriptive information about the application. The form handles validation errors 
 * and disables submission while processing.
 * @component
 * @returns {JSX.Element} The registration page layout and form.
 */
export default function Register() {
    {/* parent div */}
    return (
        <div>
            <Header />
            <Head title="Register" />       
            <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-justify pl-10 pr-10 pb-5 transition-opacity duration-750 lg:grow starting:opacity-0"
            style={{gridTemplateAreas: "'header header header' 'details register register'"}}
            >
                {/* 2 rows with 4 columns */}
                       
                {/* header div */}
                <div className="col-span-full test-gray-400 mb-10 rounded text-center" style={{gridArea: 'header'}}> 
                    <h1 className="text-2xl font-bold">Create an account</h1>
                    <p className="text-sm text-muted-foreground">Enter your details below to create your account</p>
                </div>
                
                {/* details div */}
                <div className='p-4 rounded  border-2 rounded-xl border-gray-400 w-full lg:items-start lg:justify-start lg:p-8'
                style={{gridArea: 'details'}}>
                    <span className="text-2xl dark:text-[#9f9f96]"> Lorem Ipsum Technologies </span><br/>                    
                    <span className="text-6xl font-semibold dark:text-[#EDEDEC]">Repair Route</span><br/>                    
                    <p className=" text-[#1b1b18] dark:text-[#EDEDEC]">
                        A comprehensive solution for repair task management and task acquisition, leveraging web-based technologies for seamless integration and user experience.
                    </p>
                </div>
                {/* register elements */}
                <div className='p-4 mr-20 border-2 rounded-xl border-gray-400  w-full lg:items-start lg:justify-start lg:p-8'
                style={{gridArea: 'register'}}>
                    <Form
                        method="post"
                        action={route('register')}
                        resetOnSuccess={['password', 'password_confirmation']}
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="Full name"
                                        />
                                        <InputError message={errors.name} className="mt-2" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            tabIndex={2}
                                            autoComplete="email"
                                            name="email"
                                            placeholder="email@example.com"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            required
                                            tabIndex={3}
                                            autoComplete="new-password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password_confirmation">Confirm password</Label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            required
                                            tabIndex={4}
                                            autoComplete="new-password"
                                            name="password_confirmation"
                                            placeholder="Confirm password"
                                        />
                                        <InputError message={errors.password_confirmation} />
                                    </div>

                                    <Button type="submit" className="mt-2 w-full" tabIndex={5}>
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        Create account
                                    </Button>
                                </div>

                                <div className="text-center text-sm text-muted-foreground">
                                    Already have an account?{' '}
                                    <TextLink href={route('login')} tabIndex={6}>
                                        Log in
                                    </TextLink>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
