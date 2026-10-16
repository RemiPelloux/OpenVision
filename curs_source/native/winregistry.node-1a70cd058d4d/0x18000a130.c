
/* Address: 0x18000a130; Evidence: ev_f9d32337da73aa7a77df128c2f407c5e38a214021493c23e35f4651da1c89638 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_18000a130(longlong param_1,longlong param_2)

{
  undefined8 in_RAX;
  
  for (; param_1 != param_2; param_2 = param_2 + -0x10) {
    in_RAX = 0;
    if (*(code **)(param_2 + -8) != (code *)0x0) {
      in_RAX = (**(code **)(param_2 + -8))(0);
    }
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}

