
/* Address: 0x180002cd0; Evidence: ev_0e86dcac75a98591a16616e1b4d55508d457dcc68ba2d69f5eef77209ff35f9b */

void * FUN_180002cd0(__uint64 param_1)

{
  code *pcVar1;
  void *pvVar2;
  void *pvVar3;
  
  if (param_1 == 0) {
    return (void *)0x0;
  }
  if (param_1 < 0x1000) {
    pvVar2 = operator_new(param_1);
    return pvVar2;
  }
  if (param_1 + 0x27 <= param_1) {
    FUN_180001150();
    pcVar1 = (code *)swi(3);
    pvVar2 = (void *)(*pcVar1)();
    return pvVar2;
  }
  pvVar2 = operator_new(param_1 + 0x27);
  if (pvVar2 != (void *)0x0) {
    pvVar3 = (void *)((longlong)pvVar2 + 0x27U & 0xffffffffffffffe0);
    *(void **)((longlong)pvVar3 + -8) = pvVar2;
    return pvVar3;
  }
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}

