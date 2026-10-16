
/* Address: 0x18000b830; Evidence: ev_7b0142ff4c9c3b6b20fddf171d927dd9009c9d0faf95ea25d754f4cdfc522832 */

undefined8 FUN_18000b830(uint param_1)

{
  __acrt_ptd *p_Var1;
  undefined4 *puVar2;
  
  if (param_1 == 0xfffffffe) {
    p_Var1 = FUN_18000605c();
    *(undefined4 *)p_Var1 = 0;
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 9;
  }
  else {
    if ((-1 < (int)param_1) && (param_1 < DAT_18001aa80)) {
      if ((*(byte *)((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 +
                    (ulonglong)(param_1 & 0x3f) * 0x48) & 1) != 0) {
        return *(undefined8 *)
                ((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 +
                (ulonglong)(param_1 & 0x3f) * 0x48);
      }
    }
    p_Var1 = FUN_18000605c();
    *(undefined4 *)p_Var1 = 0;
    puVar2 = (undefined4 *)FUN_180006080();
    *puVar2 = 9;
    FUN_180005ed8();
  }
  return 0xffffffffffffffff;
}

