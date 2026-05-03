'use client'

import UpdateUserInfo from '@/components/UpdateUserInfo';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';

const ProfilePage = () => {

  const userData = authClient.useSession();
  const user = userData.data?.user;

    return (
      <Card className='max-w-96 mx-auto mt-5 flex flex-col items-center border'>
         <Avatar className='h-20 w-20'>
                            <Avatar.Image
                              alt={user?.name}
                              src={user?.image}
                              referrerPolicy='no-referrer'
                            />
                            <Avatar.Fallback>
                              {user?.name?.slice(0, 2)}
                            </Avatar.Fallback>
                          </Avatar>
                          <h2 className='text-xl font-bold'>{user?.name}</h2>
                          <p className='text-muted'>{user?.email}</p>
                      <UpdateUserInfo/>   
      </Card>
    );
};

export default ProfilePage;