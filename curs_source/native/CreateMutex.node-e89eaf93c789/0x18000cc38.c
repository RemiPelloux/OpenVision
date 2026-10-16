
/* Address: 0x18000cc38; Evidence: ev_c50bc2067f38ccd0979c5e0389ae5ea5f27d18162cac05cce36ecc0df227638a */

uint FUN_18000cc38(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}

