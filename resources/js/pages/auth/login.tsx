import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import Header from '../pageComponents/header';
import Footer from '../pageComponents/footer';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    return (
        <div>
            <Header/>
            <Head title="Log in" />
            <div 
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 items-justify pl-10 pr-10 pb-5 transition-opacity duration-750 lg:grow starting:opacity-0"
            style={{gridTemplateAreas: "'header header' 'details register'"}}
            >
                <div className="col-span-full test-gray-400 mb-10 rounded text-center" style={{gridArea: 'header'}}> 
                    <h1 className="text-2xl font-semibold tracking-tight">Welcome back! Login to your account</h1>
                    <p> Enter your email and password below to login</p>
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

                <div className='p-4 mr-20 border-2 rounded-xl border-gray-400  w-full lg:items-start lg:justify-start lg:p-8'
                style={{gridArea: 'register'}}>
                    <Form method="post" action={route('login')} resetOnSuccess={['password']} className="flex flex-col gap-6">
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder="email@example.com"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                            {canResetPassword && (
                                                <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={5}>
                                                    Forgot password?
                                                </TextLink>
                                            )}
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            placeholder="Password"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Checkbox id="remember" name="remember" tabIndex={3} />
                                        <Label htmlFor="remember">Remember me</Label>
                                    </div>

                                    <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        Log in
                                    </Button>
                                </div>

                                <div className="text-center text-sm text-muted-foreground">
                                    Don't have an account?{' '}
                                    <TextLink href={route('register')} tabIndex={5}>
                                    Sign up
                                    </TextLink>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
                {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
            </div>
            <Footer/>
        </div> 
    );
}
