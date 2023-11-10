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

