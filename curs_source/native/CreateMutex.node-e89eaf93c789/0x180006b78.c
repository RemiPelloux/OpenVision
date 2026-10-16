
/* Address: 0x180006b78; Evidence: ev_d1fa3f4028eaee2f7c423973f0448a729fc1df6489e91a247568eb7e32e7ca07 */

void FUN_180006b78(longlong *param_1,longlong *param_2)

{
  size_t sVar1;
  char *pcVar2;
  
  if (((char)param_1[1] == '\0') || ((char *)*param_1 == (char *)0x0)) {
    *param_2 = *param_1;
    *(undefined1 *)(param_2 + 1) = 0;
  }
  else {
    sVar1 = strlen((char *)*param_1);
    pcVar2 = _malloc_base(sVar1 + 1);
    if (pcVar2 != (char *)0x0) {
      FUN_18000c030(pcVar2,sVar1 + 1,*param_1);
      *param_2 = (longlong)pcVar2;
      *(undefined1 *)(param_2 + 1) = 1;
    }
    thunk_FUN_18000cbe0((LPVOID)0x0);
  }
  return;
}

