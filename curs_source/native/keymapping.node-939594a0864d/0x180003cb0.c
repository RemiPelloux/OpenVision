
/* Address: 0x180003cb0; Evidence: ev_482394573410ba78a86dbb1e93abd3d1059eff5ed904b8a4989eb4af99b9aeaf */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180003cb0(longlong *param_1,longlong *param_2,undefined8 *param_3)

{
  if (((*param_2 != 0) || (param_2[1] != 0x46000000000000c0)) &&
     ((*param_2 != 0x11d80f2871c6e74e || (param_2[1] != 0x5c43845b06002aa8)))) {
    *param_3 = 0;
    return 0x80004005;
  }
  *param_3 = param_1;
  (**(code **)(*param_1 + 8))();
  return 0;
}

