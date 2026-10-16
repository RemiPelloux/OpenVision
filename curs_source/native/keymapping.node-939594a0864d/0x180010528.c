
/* Address: 0x180010528; Evidence: ev_bd98ea8fe4ed4691f1454847b54e3ddad46e5cafb2ceb53a8ae86608e446ec44 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180010528(undefined8 *param_1,undefined8 *param_2)

{
  undefined8 *in_RAX;
  undefined8 *puVar1;
  
  puVar1 = param_1;
  if (param_1 != param_2) {
    do {
      in_RAX = (undefined8 *)0x0;
      if (((code *)*puVar1 != (code *)0x0) &&
         (in_RAX = (undefined8 *)(*(code *)*puVar1)(), (char)in_RAX == '\0')) break;
      puVar1 = puVar1 + 2;
    } while (puVar1 != param_2);
    if (puVar1 != param_2) {
      if (puVar1 != param_1) {
        puVar1 = puVar1 + -1;
        do {
          if ((puVar1[-1] != 0) && ((code *)*puVar1 != (code *)0x0)) {
            (*(code *)*puVar1)(0);
          }
          in_RAX = puVar1 + -1;
          puVar1 = puVar1 + -2;
        } while (in_RAX != param_1);
      }
      return (ulonglong)in_RAX & 0xffffffffffffff00;
    }
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}

