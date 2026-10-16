
/* Address: 0x18000bdb0; Evidence: ev_d0a03eaa4b4cef953c510de8acd257c72021bb48dfdfef68709fbb3a8610d23c */

undefined8 FUN_18000bdb0(char *param_1,longlong param_2,longlong param_3)

{
  char cVar1;
  __acrt_ptd *p_Var2;
  char *pcVar3;
  
  if ((param_1 != (char *)0x0) && (param_2 != 0)) {
    if (param_3 != 0) {
      pcVar3 = param_1;
      do {
        cVar1 = pcVar3[param_3 - (longlong)param_1];
        *pcVar3 = cVar1;
        pcVar3 = pcVar3 + 1;
        if (cVar1 == '\0') {
          return 0;
        }
        param_2 = param_2 + -1;
      } while (param_2 != 0);
      *param_1 = '\0';
      p_Var2 = FUN_18000c034();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000ad7c();
      return 0x22;
    }
    *param_1 = '\0';
  }
  p_Var2 = FUN_18000c034();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000ad7c();
  return 0x16;
}

