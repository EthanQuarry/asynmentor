"use client"

import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";
import { Logo } from './icons';

export const Authentication = () => {
  return (
    <Card className="max-w-[400px] min-w-[300px] px-5 py-3">
      <CardHeader className="">
        <div className="flex justify-start items-center gap-1" >
          <Logo />
          <p className="font-bold text-inherit">Log in to Asynmentor</p>
        </div>
      </CardHeader>
      <CardBody>
        <Input type="email" label="Email" variant="underlined" />
        <Spacer y={1} />
        <Input type="password" label="Password" variant="underlined" />
      </CardBody>
      <CardFooter>
        <Button>Sign in</Button>
      </CardFooter>
    </Card>
  );
}