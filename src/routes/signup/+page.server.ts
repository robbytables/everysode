import { supabase } from '$lib/supabaseClient';
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
  default: async ({request}) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    const values = { email, password };

    const { error } = await supabase.auth.signUp(
        { email, password }, 
    );

    if (error) {
        return fail(404, { body: error.message });
    }

    return {
      success: 'Please check your email for a confirmation.'
    }
  }
}

export const GET = async ({ locals }) => {
    // if the user is already logged in, then redirect to the dashboard
    if (locals.user) {
      throw redirect(303, '/dashboard')
    }
    return {
        success: 'success'
    };
};

