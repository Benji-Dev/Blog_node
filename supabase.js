import fp from 'fastify-plugin'
import { createClient } from '@supabase/supabase-js'

function supabase(fastify, options, next) {
    const { supabaseKey, supabaseUrl } = options

    if (!supabaseKey) return next(new Error('Missing Supabase API key'))
    if (!supabaseUrl) return next(new Error('Missing Supabase URL'))

    const supabase = createClient(supabaseUrl, supabaseKey)

    if (fastify.supabase) {
        return next(new Error('fastify-supabase has already been registered'))
    }

    fastify.decorate('supabase', supabase) // rajouter des fonctionnalités à fastify app.supabase from user select from machin
    next()
}

export const supabasePlugin = fp(supabase, { name: 'supabase' })