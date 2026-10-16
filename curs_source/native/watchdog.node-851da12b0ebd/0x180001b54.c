
/* Address: 0x180001b54; Evidence: ev_11cafe08febd2fcf197f032b59beb2e22334fa2a309fc5705df00ce28f833d6f */

/* Library Function - Single Match
    __scrt_dllmain_after_initialize_c
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __scrt_dllmain_after_initialize_c(void)

{
  bool bVar1;
  undefined7 extraout_var;
  undefined8 uVar2;
  ulonglong uVar3;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if ((int)CONCAT71(extraout_var,bVar1) == 0) {
    uVar2 = FUN_180001ac8();
    uVar3 = FUN_18000545c((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_1800055dc();
  }
  else {
    uVar2 = FUN_180002014();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}

