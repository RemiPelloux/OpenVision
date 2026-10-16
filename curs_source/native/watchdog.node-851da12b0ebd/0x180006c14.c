
/* Address: 0x180006c14; Evidence: ev_500c1fa1fb2a2d62cb837d471af5736950d2094194db4651db89bc895ddee5dc */

uint FUN_180006c14(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}

