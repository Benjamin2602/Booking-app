import { CreateDescriptionPage } from "@/app/action";
import { BottomBar } from "@/app/components/BottomBar";
import { Counter } from "@/app/components/Counter";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DescriptionPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          please describe your home as good as you can!
        </h2>
      </div>
      <form action={CreateDescriptionPage}>
        <input type="hidden" name="homeId" value={params.id} />
        <div className="w-3/5 mx-auto mt-10 flex flex-col gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input name="title" required placeholder="short and simple...." />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea
              name="description"
              required
              placeholder="describe your home...."
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Price</Label>
            <Input
              name="price"
              required
              type="number"
              placeholder="Price per night in INR"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Image</Label>
            <Input
              name="image"
              required
              type="file"
              accept="image/*"
              placeholder="upload image"
            />
          </div>
          <Card>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Guests</h3>
                  <p className="text-muted-foreground text-sm">
                    How many guests would you like to bring
                  </p>
                </div>
                <Counter name="guest" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Rooms</h3>
                  <p className="text-muted-foreground text-sm">
                    How many rooms would you like to have
                  </p>
                </div>
                <Counter name="room" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Bathroom</h3>
                  <p className="text-muted-foreground text-sm">
                    How many bathrooms would you like to have
                  </p>
                </div>
                <Counter name="bathroom" />
              </div>
            </CardHeader>
          </Card>
        </div>
        <BottomBar />
      </form>
    </>
  );
}
