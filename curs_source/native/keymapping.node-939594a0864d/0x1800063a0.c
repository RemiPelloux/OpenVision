
/* Address: 0x1800063a0; Evidence: ev_d243a37cd20bfe7b0f83da1b0c00e95a6010188f21df15a995b12fae6a347ccc */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Exceeded maximum restarts with more pending */
/* Library Function - Single Match
    __vcrt_FlsAlloc
   
   Library: Visual Studio 2019 Release */

void __vcrt_FlsAlloc(undefined8 param_1)

{
  FARPROC pFVar1;
  
  pFVar1 = FUN_180006250(0,"FlsAlloc",(uint *)&DAT_18001a568,(uint *)"FlsAlloc");
  if (pFVar1 != (FARPROC)0x0) {
    (*pFVar1)(param_1);
    return;
  }
                    /* WARNING: Could not recover jumptable at 0x0001800063de. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  TlsAlloc();
  return;
}

