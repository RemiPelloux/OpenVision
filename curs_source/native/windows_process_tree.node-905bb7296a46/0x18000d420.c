
/* Address: 0x18000d420; Evidence: ev_b46177d2d39db629537630c9426846f3f3b6a1bd4a9c881bcc9e5cc1d5f8d332 */

undefined8 FUN_18000d420(char *param_1,longlong param_2,longlong param_3)

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
      p_Var2 = FUN_18000d6a4();
      *(undefined4 *)p_Var2 = 0x22;
      FUN_18000c3ec();
      return 0x22;
    }
    *param_1 = '\0';
  }
  p_Var2 = FUN_18000d6a4();
  *(undefined4 *)p_Var2 = 0x16;
  FUN_18000c3ec();
  return 0x16;
}

