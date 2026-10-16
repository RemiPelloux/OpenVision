
/* Address: 0x180004ba8; Evidence: ev_9a3425ac47ff923a4ebf181324ceb01e189d494d01c95419854e37b1d03eab04 */

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
    uVar2 = FUN_180004b24();
    uVar3 = FUN_18000ad78((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_18000aef8();
  }
  else {
    uVar2 = FUN_18000508c();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}

