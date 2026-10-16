
/* Address: 0x18001375c; Evidence: ev_9c147d6094346a05c8bdca4bfd6c4471fbb244d5d3b137ff4212266c7a326f5a */

/* Library Function - Single Match
    __GSHandlerCheck_SEH
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void __GSHandlerCheck_SEH
               (PEXCEPTION_RECORD param_1,PVOID param_2,longlong param_3,longlong *param_4)

{
  uint uVar1;
  uint *puVar2;
  
  puVar2 = (uint *)param_4[7];
  uVar1 = *puVar2;
  FUN_18001362c(param_2,(longlong)param_4);
  if ((puVar2[(ulonglong)uVar1 * 4 + 1] & ((param_1->ExceptionFlags & 0x66) != 0) + 1) != 0) {
    FUN_180006ae4(param_1,param_2,param_3,param_4);
  }
  return;
}

