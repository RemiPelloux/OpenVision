
/* Address: 0x1800155d0; Evidence: ev_75d174da5c74c25a6f8a4c293032982289fc0615c4d285dbe59e5ddd5a56c80f */

undefined8 FUN_1800155d0(uint *param_1,uint param_2,uint param_3)

{
  __acrt_ptd *p_Var1;
  uint uVar2;
  
  uVar2 = param_3 & 0xfff7ffff;
  if ((param_2 & uVar2 & 0xfcf0fce0) != 0) {
    if (param_1 != (uint *)0x0) {
      uVar2 = thunk_FUN_180016300(0,0);
      *param_1 = uVar2;
    }
    p_Var1 = FUN_18000b774();
    *(undefined4 *)p_Var1 = 0x16;
    FUN_18000821c();
    return 0x16;
  }
  if (param_1 != (uint *)0x0) {
    uVar2 = thunk_FUN_180016300(param_2,uVar2);
    *param_1 = uVar2;
    return 0;
  }
  thunk_FUN_180016300(param_2,uVar2);
  return 0;
}

