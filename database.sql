/*
* USERS
* Template used for the table containing user data. Users should only be able to view and update their own data.
*/

create table users {
    --  UUID from auth.users
    id uuid references auth.users not null primary key,
    full_name text,
    avatar_url text,
    -- The user's billing address stored in JSON format
    billing_address jsonb,
    -- Stores your cutomer's payment instruments
    payment_method jsonb
};

alter table users
    enable row level security;

create policy "Can view own user data." on users
    for select using (auth.uid() = id);

create policy "Can update own user data." on users
    for update using (auth.uid() = id);

/** 
* This trigger automatically creates a user entry when a new user signs up via Supabase Auth
*/

create function public.handle_new_user()
returns trigger as
$$
    begin
        insert into public.users (id, full_name, avatar_url)
        values (new.id, new.raw_user_meta_data ->> "full_name", new.raw_user_meta_data ->> "avatar_url");
        return new;
    end
$$
