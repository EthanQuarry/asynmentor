"use client"

import React, { useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";
import { Logo } from './icons';
import { useRouter } from 'next/navigation';
export const Authentication = () => {

  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true)
    console.log("Email is: ", email, "Password is: ", password);


    let formData = {
      email: email,
      password: password,
    }
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.status === 200) {
        setIsLoading(false)
        const data = await response.json()
        router.push(`/dashboard`)
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      console.error("Error:", error)
    }

  }
      return (
        <Card className="max-w-[400px] min-w-[300px] px-5 py-3">
          <CardHeader className="">
            <div className="flex justify-start items-center gap-1" >
              <Logo />
              <p className="font-bold text-inherit">Log in to Asynmentor</p>
            </div>
          </CardHeader>
          <CardBody>
            <form onSubmit={onSubmit}>
              <Input
                type="email"
                value={email}
                label="Email"
                variant="underlined"
                onChange={e => setEmail(e.target.value)}
                required={true}
              />
              <Spacer y={1} />
              <Input
                type="password"
                label="Password"
                value={password}
                variant="underlined"
                onChange={e => setPassword(e.target.value)}
                required={true}
              />
              <br />
              <Button type='submit' variant='ghost'>Log in</Button>
            </form>
          </CardBody>
        </Card>
      );
    }