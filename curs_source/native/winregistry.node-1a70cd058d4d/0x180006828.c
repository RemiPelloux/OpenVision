
/* Address: 0x180006828; Evidence: ev_ddf011aaf9c384407c5138ee00659f4ff143ebeb60a63acf87453e55826e0de1 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

ulonglong FUN_180006828(int param_1)

{
  longlong lVar1;
  longlong *plVar2;
  __acrt_ptd *p_Var3;
  longlong *plVar4;
  ulonglong uVar5;
  char *pcVar6;
  ulonglong uVar7;
  longlong *local_res10;
  ulonglong local_res18;
  ulonglong local_res20;
  
  uVar7 = 0;
  if (param_1 == 0) {
    return 0;
  }
  if (1 < param_1 - 1U) {
    p_Var3 = FUN_1800072a4();
    *(undefined4 *)p_Var3 = 0x16;
    FUN_180005fec();
    return 0x16;
  }
  __acrt_initialize_multibyte();
  FUN_1800088b4((HMODULE)0x0,&DAT_18001c270,0x104);
  _DAT_18001c660 = &DAT_18001c270;
  if ((DAT_18001c680 == (char *)0x0) || (pcVar6 = DAT_18001c680, *DAT_18001c680 == '\0')) {
    pcVar6 = &DAT_18001c270;
  }
  local_res18 = 0;
  local_res20 = 0;
  FUN_180006608(pcVar6,(undefined8 *)0x0,(char *)0x0,(longlong *)&local_res18,
                (longlong *)&local_res20);
  uVar5 = local_res18;
  plVar4 = __acrt_allocate_buffer_for_argv(local_res18,local_res20,1);
  if (plVar4 == (longlong *)0x0) {
    p_Var3 = FUN_1800072a4();
    uVar7 = 0xc;
    *(undefined4 *)p_Var3 = 0xc;
  }
  else {
    FUN_180006608(pcVar6,plVar4,(char *)(plVar4 + uVar5),(longlong *)&local_res18,
                  (longlong *)&local_res20);
    if (param_1 != 1) {
      local_res10 = (longlong *)0x0;
      uVar5 = thunk_FUN_180008070(plVar4,&local_res10);
      plVar2 = local_res10;
      if ((int)uVar5 != 0) {
        FUN_180007bd0(local_res10);
        local_res10 = (longlong *)0x0;
        FUN_180007bd0(plVar4);
        return uVar5 & 0xffffffff;
      }
      _DAT_18001c668 = 0;
      lVar1 = *local_res10;
      uVar5 = uVar7;
      while (lVar1 != 0) {
        local_res10 = local_res10 + 1;
        uVar5 = uVar5 + 1;
        _DAT_18001c668 = (int)uVar5;
        lVar1 = *local_res10;
      }
      local_res10 = (longlong *)0x0;
      DAT_18001c670 = plVar2;
      FUN_180007bd0((LPVOID)0x0);
      local_res10 = (longlong *)0x0;
      goto LAB_18000698d;
    }
    _DAT_18001c668 = (int)local_res18 + -1;
    DAT_18001c670 = plVar4;
  }
  plVar4 = (longlong *)0x0;
LAB_18000698d:
  FUN_180007bd0(plVar4);
  return uVar7;
}

