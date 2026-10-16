
/* Address: 0x180003d10; Evidence: ev_498e7a88b3827d3c1cca25ee7cdafdac987863c558bc4cd09b32326299217c8f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 * FUN_180003d10(undefined8 *param_1,uint param_2)

{
  *param_1 = &PTR_FUN_180023f50;
  if ((longlong *)param_1[3] != (longlong *)0x0) {
    if (*(int *)(param_1 + 4) != -1) {
      (**(code **)(*(longlong *)param_1[3] + 0x20))();
      *(undefined4 *)(param_1 + 4) = 0xffffffff;
    }
    (**(code **)(*(longlong *)param_1[3] + 0x10))();
    param_1[3] = 0;
  }
  if ((param_2 & 1) != 0) {
    thunk_FUN_18000bff0(param_1);
  }
  return param_1;
}

